import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';
import { dateRangeToAPIStr } from '~/routes/solarPanelDashboard';
import { format, addDays } from "date-fns";

interface ProductionChartProps {
    className?: string;
    date: DateRange;
}

function ProductionChart({ date, api_url }: {date:ProductionChartProps,api_url:string}) {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [] as JSON[]
    });

    useEffect(() => {
        const foo = async () => {

            if (!date.from || !date.to) return;
            const [startDate, endDate] = dateRangeToAPIStr(date)
            const url = `${api_url}/api/electricity?startDate=${startDate}&endDate=${endDate}&timeUnit=QUARTER_OF_AN_HOUR`;

            let newData = {
                labels: [] as string[],
                datasets: [] as JSON[]
            }

            let req1 = fetch(url)  
                .then(response => response.json())
                .then(data => {
                    newData.labels = data.energy.values.map(entry => entry.date);
                    newData.datasets.push({
                        label: "Production d'énergie",
                        data: data.energy.values.map(entry => entry.value / 1000),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.3,
                        pointRadius: 0,
                        order: 0
                    });
                })
                .catch(error => console.error('Failed to load data:', error));
            
            const endDateTheorical = format(addDays(endDate, 1), 'yyyy-MM-dd')

            const radiation_url = `${api_url}/api/daily_solar_radiation?startDate=${startDate}&endDate=${endDateTheorical}`;
            let req2 = fetch(radiation_url)
                .then(response => response.json())
                .then(data => {
                    newData.datasets.push({
                        label: "Production théorique",
                        data: data.data.map(entry => entry.solar_rad / 650),
                        fill: true,
                        borderColor: 'rgb(243, 225, 247)',
                        backgroundColor: 'rgb(243, 225, 247)',
                        tension: 0.3,
                        pointRadius: 0,
                        order: 1
                    });
                })
                .catch(error => console.error('Failed to load data: ', error));
            
            await req1;
            await req2;

            setChartData(newData);
        };
        foo();
    }, [date]);

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Energie (kWh)'
                }
            }
        }
    };

    return (
        <ChartComponent
            id="energyProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

export default ProductionChart;
