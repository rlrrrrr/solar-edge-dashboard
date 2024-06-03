import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';
import { dateRangeToAPIStr } from '~/routes/solarPanelDashboard';

interface ProductionChartProps {
    className?: string;
    date: DateRange;
}

function ProductionChart({ date }: ProductionChartProps) {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [] as JSON[]
    });

    useEffect(() => {
        const foo = async () => {

            if (!date.from || !date.to) return;
            const [startDate, endDate] = dateRangeToAPIStr(date)
            const url = `http://localhost:3333/api/electricity?startDate=${startDate}&endDate=${endDate}&timeUnit=QUARTER_OF_AN_HOUR`;

            let newData = {
                labels: [] as string[],
                datasets: [] as JSON[]
            }

            let req1 = fetch(url)  
                .then(response => response.json())
                .then(data => {
                    // Transform the data into the format expected by the chart
                    newData.labels = data.energy.values.map(entry => entry.date);
                    newData.datasets.push({
                        label: "Energy production (kWh)",
                        xAxisID: 'xAxis0',
                        data: data.energy.values.map(entry => entry.value / 1000),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    });
                })
                .catch(error => console.error('Failed to load data:', error));
            
            const radiation_url = `http://localhost:3333/api/daily_solar_radiation?startDate=${startDate}&endDate=${endDate}`;

            let req2 = fetch(radiation_url)
                .then(response => response.json())
                .then(data => {
                    // Transform the data into the format expected by the chart
                    newData.datasets.push({
                        label: "Theorical production (kWh)",
                        xAxisID: 'xAxis0',
                        data: data.data.map(entry => entry.solar_rad * 130 / 1000 / 24),
                        fill: false,
                        borderColor: 'rgb(175, 92, 192)',
                        tension: 0.1
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
                parsing: false,
                time: {
                    unit: 'hour',
                    stepSize: 1,
                    displayFormats: {
                        hour: 'H',
                        day: 'YYYY-MM-DD',
                    }
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
