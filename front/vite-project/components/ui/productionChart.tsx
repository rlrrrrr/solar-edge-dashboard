import { useEffect, useState } from 'react';
import ChartComponent from './chart';

function ProductionChart() {
    // Initialize state for chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        fetch('dataset.json')  // Adjust the path as necessary
            .then(response => response.json())
            .then(data => {
                // Transform the data into the format expected by the chart
                const newData = {
                    labels: data.energy.values.map(entry => entry.date),
                    datasets: [{
                        label: "Energy production (Wh)",
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
    }, []); // Empty dependency array ensures this effect only runs once

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                parsing: false,
                time: {
                    unit: 'hour',
                    stepSize: 1,
                    displayFormats: {
                        hour: 'H',
                        day: 'YYYY-MM-DD',
                    }
                }
            }
        }
    };

    return (
        <ChartComponent
            id="energyProductionChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
}

export default ProductionChart;
