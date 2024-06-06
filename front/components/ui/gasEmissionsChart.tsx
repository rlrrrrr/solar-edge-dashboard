import { useState, useEffect } from 'react';
import ChartComponent from './chart';

export default function GasEmissionChart({data}) {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const gasEmissions = data.envBenefits.gasEmissionSaved;
        const newData = {
            labels: ['CO₂', 'SO₂', 'NOx'],
            datasets: [{
                label: 'Gas Emissions',
                data: [gasEmissions.co2, gasEmissions.so2, gasEmissions.nox],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        };
        setChartData(newData);
    }, [data]);

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantité (kg)'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <ChartComponent
            id="gasEmissionChart"
            chartType="bar"
            data={chartData}
            options={chartOptions}
        />
    )
}
