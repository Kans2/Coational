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

    
    const bloodPressureData = data.map(record => ({
        month: record.month || 'Unknown',  
        systolic: record.blood_pressure.systolic.value,
        diastolic: record.blood_pressure.diastolic.value,
    }));

    const chartData = {
        labels: bloodPressureData.map(record => record.month),  
        datasets: [
            {
                label: 'Systolic',
                data: bloodPressureData.map(record => record.systolic),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
            },
            {
                label: 'Diastolic',
                data: bloodPressureData.map(record => record.diastolic),
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
                    size: 14,
                },
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 12,
                    font: {
                        size: 12,
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month',
                    font: {
                        size: 12,
                    },
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Pressure (mmHg)',
                    font: {
                        size: 12,
                    },
                },
                min: 0,
                ticks: {
                    stepSize: 20,
                    font: {
                        size: 10,
                    },
                },
            },
        },
    };

    return (
        <div className="blood-pressure-container">
            <div className="chart-section">
                <Line data={chartData} options={options} />
            </div>
            <div className="stats-section">
                {data.length > 0 && (
                    <div className="blood-pressure-stats">
                        <div className="stat-item systolic">
                            <span className="stat-label">Systolic</span>
                            <span className="stat-value">{data[data.length - 1].blood_pressure.systolic.value}</span>
                            <span className="stat-status">{data[data.length - 1].blood_pressure.systolic.levels}</span>
                        </div>
                        <div className="stat-item diastolic">
                            <span className="stat-label">Diastolic</span>
                            <span className="stat-value">{data[data.length - 1].blood_pressure.diastolic.value}</span>
                            <span className="stat-status">{data[data.length - 1].blood_pressure.diastolic.levels}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BloodPressureGraph;
