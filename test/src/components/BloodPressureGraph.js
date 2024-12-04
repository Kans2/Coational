// src/components/BloodPressureGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BloodPressureGraph = ({ data }) => {
    if (!data || data.length === 0) return <p>No blood pressure data available.</p>;

    const chartData = {
        labels: data.map(record => record.month), 
        datasets: [
            {
                label: 'Systolic',
                data: data.map(record => record.systolic), 
                borderColor: 'rgba(255, 99, 132, 1)', 
                backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                borderWidth: 2,
                tension: 0.4, 
                fill: true, 
            },
            {
                label: 'Diastolic',
                data: data.map(record => record.diastolic), 
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
            },
        ],
    };

    
    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            title: {
                display: true,
                text: 'Blood Pressure Trends', 
                font: {
                    size: 16,
                },
            },
            legend: {
                display: true,
                position: 'top', 
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month',
                    font: {
                        size: 14,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Pressure (mmHg)',
                    font: {
                        size: 14,
                    },
                },
                min: 0, 
                ticks: {
                    stepSize: 20,
                },
            },
        },
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default BloodPressureGraph;

