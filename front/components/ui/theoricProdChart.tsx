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
        const solarData = data.data.map(entry => ({
            time: entry.timestamp_local,
            solarRad: entry.solar_rad
        }));

        const newData = {
            labels: solarData.map(entry => format(new Date(entry.time), 'H:mm')),
            datasets: [{
                label: "Production théorique",
                xAxisID: 'xAxis0',
                data: solarData.map(entry => entry.solarRad / 650),
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
                    tooltipFormat: 'H:mm'
                },
                ticks: {
                    source: 'data',
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Production théorique (kWh)'
                }
            }
        },
        plugins: {
            legend: {
                display: false
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
