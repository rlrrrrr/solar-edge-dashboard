import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ChartComponent from './chart';

function DayProductionChart() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    const currentDate = format(new Date(), 'yyyy-MM-dd');

    const url = `${process.env.API_URL}/api/electricity?startDate=${currentDate}&endDate=${currentDate}&timeUnit=QUARTER_OF_AN_HOUR`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Transform the data into the format expected by the chart
                const newData = {
                    labels: data.energy.values.map(entry => format(new Date(entry.date), 'HH:mm:ss')),
                    datasets: [{
                        label: "Production in a day (Wh)",
                        xAxisID: 'xAxis0',
                        data: data.energy.values.map(entry => entry.value),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                };
                setChartData(newData);
            })
            .catch(error => console.error('Failed to load data:', error));
    }, []);

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    parser: 'HH:mm:ss', 
                    unit: 'hour',
                    displayFormats: {
                        hour: 'HH' 
                    }
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 24, 
                    maxRotation: 0, 
                    minRotation: 0,
                    source: 'data',
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Electricity (kWh)'
                }
            }
        }
    };

    return (
        <ChartComponent
            id="energyDayProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

export default DayProductionChart;
