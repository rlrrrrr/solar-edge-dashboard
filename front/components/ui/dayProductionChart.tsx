import { useEffect, useState } from 'react'; // Importez useEffect
import ChartComponent from '../../components/ui/chart';
import { format } from 'date-fns';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    annotationPlugin
);

export default function DayProductionChart({data}) {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const currentHour = new Date();
    let flooredMinutes = Math.floor(currentHour.getMinutes() / 15) * 15;
    currentHour.setMinutes(flooredMinutes);

    useEffect(() => {
        const newData = {
            labels: data.energy.values.map((entry) => format(new Date(entry.date), 'H:mm')),
            datasets: [{
                label: "Production journalière",
                data: data.energy.values.map((entry) => (entry.value==null ? null : entry.value / 1000)),
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
                    text: 'Energie (kWh)'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            annotation: {
                annotations: {
                    now: {
                        type: 'line',
                        scaleID: 'x',
                        value: format(currentHour, 'HH:mm'),
                        borderColor: "red",
                        label: {
                            display: true,
                            position: 'start',
                            content: 'Maintenant'
                        }
                    }
                }
            }
        }
    };

    return (
        <Line
            id="energyDayProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

