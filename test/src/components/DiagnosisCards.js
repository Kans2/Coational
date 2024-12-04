import React from 'react';

const DiagnosisCards = ({ diagnosis }) => {
    if (!diagnosis) {
        return <p>Diagnosis data is unavailable.</p>;
    }

    const { respiratoryRate, heartRate, oxygenSaturation } = diagnosis;

    return (
        <div className="diagnosis-cards">
            <div className="card">
                <h3>Respiratory Rate</h3>
                <p>{respiratoryRate !== undefined ? `${respiratoryRate} breaths/min` : 'N/A'}</p>
            </div>
            <div className="card">
                <h3>Heart Rate</h3>
                <p>{heartRate !== undefined ? `${heartRate} bpm` : 'N/A'}</p>
            </div>
            <div className="card">
                <h3>Oxygen Saturation</h3>
                <p>{oxygenSaturation !== undefined ? `${oxygenSaturation}%` : 'N/A'}</p>
            </div>
        </div>
    );
};

export default DiagnosisCards;
