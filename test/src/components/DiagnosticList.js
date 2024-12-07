import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
    if (!diagnostics || diagnostics.length === 0) {
        return <p>No diagnostics available.</p>;
    }

    return (
        <div className="diagnostic-list">
        <h3 className="diagnostic-list-title">Diagnostic List</h3>
        <table className="diagnostic-list-table">
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
                        <td>{item.name || "N/A"}</td>
                        <td>{item.description || "N/A"}</td>
                        <td>{item.status || "N/A"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default DiagnosticList;
