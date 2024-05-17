import { useEffect, useState } from 'react';
import ChartComponent from './chart';

function GasEmissionChart() {
    // Initialize state for chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        fetch('co2.json')
            .then(response => response.json())
            .then(data => {
                // Assuming data structure as provided before
                const gasEmissions = data.envBenefits.gasEmissionSaved;

                // Transform the data into the format expected by the chart
                const newData = {
                        labels: ['CO2 (kg)', 'SO2 (kg)', 'NOx (kg)'],
                        datasets: [{
                            label: 'Gas Emissions Saved',
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
            })
            .catch(error => console.error('Failed to load data:', error));
    }, []); // Empty dependency array ensures this effect only runs once

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantity (kg)'
                }
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
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
    );
}

export default GasEmissionChart;
