import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
    if (!diagnostics || diagnostics.length === 0) {
        return <p>No diagnostics available.</p>;
    }

    return (
        <div className="diagnostic-list">
            <h3>Diagnostics</h3>
            <ul>
                {diagnostics.map((item, index) => (
                    <li key={index}>{item.name || `Diagnosis ${index + 1}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default DiagnosticList;
