import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ChartComponent from './chart';

function DayProductionChart() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        fetch('dataset.json')  // Adjust the path as necessary
            .then(response => response.json())
            .then(data => {
                // Retrieve Date
                //console.log(sessionStorage.getItem('dateRange'))
                // END Retrieve Date
                const dayValues = data.energy.values.filter(entry => entry.date.startsWith("2024-05-14"));

                // Transform the data into the format expected by the chart
                const newData = {
                    labels: dayValues.map(entry => format(new Date(entry.date), 'HH:mm:ss')),
                    datasets: [{
                        label: "Production in a day (Wh)",
                        xAxisID: 'xAxis0',
                        data: dayValues.map(entry => entry.value),
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                };
                setChartData(newData);
            })
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
                    autoSkip: true, // Automatically skip ticks to avoid overlap
                    maxTicksLimit: 24, // Maximum number of ticks on the x-axis
                    maxRotation: 0, // Prevent labels from rotating
                    minRotation: 0,
                    source: 'data', // Use data to generate ticks (ensure ticks come from the data points)
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
