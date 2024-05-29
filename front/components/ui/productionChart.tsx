import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';

interface ProductionChartProps {
    className?: string;
    date: DateRange;
}

function ProductionChart({date}: ProductionChartProps) {
    // Initialize state for chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {

        if (!date.from || !date.to) return;
        const startDate = date.from.toISOString().split('T')[0];
        const endDate = date.to.toISOString().split('T')[0];
        const url = `http://localhost:3333/api/electricity?startDate=${startDate}&endDate=${endDate}&timeUnit=HOUR`;
        
        fetch(url)  // Adjust the path as necessary
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
