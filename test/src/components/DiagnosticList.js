// src/components/DiagnosticList.js
import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
    if (!diagnostics || diagnostics.length === 0) return <p>No diagnostic data available.</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Problem/Diagnosis</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {diagnostics.map((item, index) => (
                    <tr key={index}>
                        <td>{item.problem}</td>
                        <td>{item.description}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DiagnosticList;



