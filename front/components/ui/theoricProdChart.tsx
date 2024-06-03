import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';

interface TheoricProductionChartProps {
    className?: string;
    date: DateRange;
}

function TheoricProductionChart() {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [] as JSON[]
    });

    useEffect(() => {
        const foo = async () => {
            const url = `http://localhost:3333/api/hourly_prediction_solar_radiation`;

            let newData = {
                labels: [] as string[],
                datasets: [] as JSON[]
            };

            let req1 = fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Correctly refer to the variable `data` received from the response
                    const solarData = data.data.map(entry => ({
                        time: entry.timestamp_local,
                        solarRad: entry.solar_rad
                    }));

                    // Transform the data into the format expected by the chart
                    newData.labels = solarData.map(entry => format(new Date(entry.time), 'HH:mm:ss'));
                    newData.datasets.push({
                        label: "Solar Radiation (kWh)",
                        xAxisID: 'xAxis0',
                        data: solarData.map(entry => entry.solarRad * 130 / 1000),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    });
                })
                .catch(error => console.error('Failed to load data:', error));
            
            await req1;
            setChartData(newData);
        };
        foo();
    }, []);

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour',
                    stepSize: 1,
                    displayFormats: {
                        hour: 'HH'
                    },
                    tooltipFormat: 'HH:mm'
                },
                ticks: {
                    source: 'data',
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Therical Production (kWh)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    };

    return (
        <ChartComponent
            id="theoricProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

export default TheoricProductionChart;
