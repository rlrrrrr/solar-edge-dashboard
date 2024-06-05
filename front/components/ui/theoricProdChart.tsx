import { useState, useEffect } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';

interface TheoricProductionChartProps {
    className?: string;
    date: DateRange;
}

export default function TheoricProductionChart({data}) {

    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [] as JSON[]
    });
    useEffect(() => {
        console.log("theoric production data 2 ",data)
        const solarData = data.data.map(entry => ({
            time: entry.timestamp_local,
            solarRad: entry.solar_rad
        }));
        console.log("theoric production data ", solarData)

        const newData = {
            labels: solarData.map(entry => format(new Date(entry.time), 'HH:mm')),
            datasets: [{
                label: "Theorical Energy Production (kWh)",
                xAxisID: 'xAxis0',
                data: solarData.map(entry => entry.solarRad * 130 / 1000),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3
            }]
        };
        setChartData(newData);
    }, [data]);

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
