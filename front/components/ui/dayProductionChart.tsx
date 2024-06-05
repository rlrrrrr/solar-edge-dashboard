import { useState, useEffect } from 'react'; // Importez useEffect
import ChartComponent from '../../components/ui/chart';
import {format} from "date-fns";

export default function DayProductionChart({data}) {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const newData = {
            labels: data.energy.values.map((entry) => format(new Date(entry.date), 'H:mm')),
            datasets: [{
                label: "Production in a day (Wh)",
                data: data.energy.values.map((entry) => entry.value),
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
                    parser: 'H:mm',
                    unit: 'hour',
                    displayFormats: {
                        hour: 'H:mm'
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Electricity (kWh)'
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
            id="energyDayProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

