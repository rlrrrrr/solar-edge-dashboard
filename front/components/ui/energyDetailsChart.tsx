import { useEffect, useState } from 'react';
import ChartComponent from './chart';
import { DateRange } from 'react-day-picker';
import { dateRangeToAPIStr } from '~/routes/solarPanelDashboard';


interface EnergyDataChartProps {
    className?: string;
    date: DateRange;
}

const EnergyDataChart = ({ date, api_url } : {date:EnergyDataChartProps, api_url:string}) => {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [] as JSON[]
    });

    const fetchData = async () => {
        if (!date.from || !date.to) return;
        const [startDate, endDate] = dateRangeToAPIStr(date);
    
        const url = `${api_url}/api/energyDetails?startDate=${startDate}&endDate=${endDate}&meters=PRODUCTION,CONSUMPTION,FEEDIN,PURCHASED&timeUnit=QUARTER_OF_AN_HOUR`;
        let newData = {
            labels: [] as string[],
            datasets: [] as JSON[]
        };
    
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                newData.labels = data.energyDetails.meters.flatMap(meter => meter.values.map(value => value.date));
    
                // Generic function to extract data by meter type
                const getDataForMeterType = (type) => {
                    const meter = data.energyDetails.meters.find(m => m.type === type);
                    if (!meter) {
                        console.error(`No meter found for type: ${type}`);
                        return [];
                    }
                    return meter.values.map(value => value.value / 1000); // Convert Wh to kWh
                };
    
                // Populate newData.datasets with the data for each meter type
                newData.datasets = [
                    {
                        label: 'Consommation',
                        data: getDataForMeterType("Consumption"),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        pointRadius: 0,
                        tension: 0.3
                    },
                    {
                        label: 'Production',
                        data: getDataForMeterType("Production"),
                        borderColor: 'rgb(23, 162, 184)', 
                        backgroundColor: 'rgba(23, 162, 184, 0.5)',
                        pointRadius: 0,
                        tension: 0.3
                    },
                    {
                        label: 'Vendu',
                        data: getDataForMeterType("FeedIn"),
                        borderColor: 'rgb(255, 206, 86)',
                        backgroundColor: 'rgba(255, 206, 86, 0.5)',
                        pointRadius: 0,
                        tension: 0.3
                    },
                    {
                        label: 'Acheté',
                        data: getDataForMeterType("Purchased"),
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        pointRadius: 0,
                        tension: 0.3
                    }
                ];
            })
            .catch(error => console.error('Failed to load data:', error));
    
        setChartData(newData);
    };

    useEffect(() => {
        fetchData();
    }, [date]);

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Energie (kWh)'                }
            }
        }
    };

    return (
        <ChartComponent
            id="energyDataChart"
            chartType="line"
            data={chartData}
            options={chartOptions}
        />
    );
};

export default EnergyDataChart;
