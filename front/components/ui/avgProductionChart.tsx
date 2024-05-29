import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';

function AvgProductionChart() {
    // Initialize state for chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        fetch('dataset.json')  // Adjust the path as necessary
            .then(response => response.json())
            .then(data => {
                // Compute the avg by day
                // Transform the data into the format expected by the chart
                const energyData = data.energy.values;
                // Group and average the data by day
                const averages = energyData.reduce((acc, { date, value }) => {
                    const day = date.split(' ')[0]; 
                    if (!acc[day]) {
                        acc[day] = { sum: 0, count: 0 };
                    }
                    acc[day].sum += value;
                    acc[day].count++;
                    return acc;
                }, {});

                const dailyAverages = Object.keys(averages).map(day => ({
                    day: day,
                    average: averages[day].sum / averages[day].count
                }));

                // Extract the labels and data for the chart
                const labels = dailyAverages.map(data => data.day);
                const dataPoints = dailyAverages.map(data => data.average);
                // End compute avg by day

                const newData = {
                    labels: labels,
                    datasets: [{
                        label: 'Daily Average Energy Production (Wh)',
                        data: dataPoints,
                        borderColor: 'rgb(75, 192, 192)',
                        fill: false,
                        tension: 0.1
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
                    text: 'Average Energy (Wh)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Day'
                }
            }
        }
    };

    return (
        <ChartComponent
            id="avgEnergyProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

export default AvgProductionChart;
