import { useEffect } from 'react';
import 'chartjs-adapter-date-fns';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ id, chartType, data, options }) => {
    useEffect(() => {
        const ctx = document.getElementById(id).getContext('2d');
        const chartInstance = new Chart(ctx, {
            type: chartType,
            data: data,
            options: options
        });

        return () => chartInstance.destroy();
    }, [id, chartType, data, options]);

    return <canvas id={id}></canvas>;
};

export default ChartComponent;
