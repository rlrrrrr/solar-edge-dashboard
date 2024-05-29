import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';
import { dateRangeToAPIStr } from '~/routes/solarPanelDashboard';

interface ProductionChartProps {
    className?: string;
    date: DateRange;
}

function ProductionChart({ date }: ProductionChartProps) {
    // Initialize state for chart data
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {

        if (!date.from || !date.to) return;
        const [startDate, endDate] = dateRangeToAPIStr(date)
        const url = `http://localhost:3333/api/electricity?startDate=${startDate}&endDate=${endDate}&timeUnit=DAY`;

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
    }, [date]);

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
