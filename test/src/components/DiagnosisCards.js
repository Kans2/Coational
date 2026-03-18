import React from 'react';
import lung from "../asset/lung.png";
import heart from "../asset/heart-attack.png";
import temp from "../asset/thermometer.png";

const DiagnosisCards = ({ diagnosis }) => {
    if (!diagnosis) {
        return <p>Diagnosis data is unavailable.</p>;
    }

    return (
        <div className="diagnosis-cards-container">
            <div className="card respiratory-rate">
                <img src={lung} alt="lung" width={100} height={100} />
                <h3>Respiratory Rate</h3>
                {diagnosis.length > 0 && (
                    <div className="card-value-container">
                        <p className="card-value">{diagnosis[diagnosis.length - 1].respiratory_rate.value} bpm</p>
                        <p className="card-status">{diagnosis[diagnosis.length - 1].respiratory_rate.levels}</p>
                    </div>
                )}
            </div>

            <div className="card heart-rate">
                <img src={heart} alt="heart" width={100} height={100} />
                <h3>Heart Rate</h3>
                {diagnosis.length > 0 && (
                    <div className="card-value-container">
                        <p className="card-value">{diagnosis[diagnosis.length - 1].heart_rate.value} bpm</p>
                        <p className="card-status">{diagnosis[diagnosis.length - 1].heart_rate.levels}</p>
                    </div>
                )}
            </div>

            <div className="card temperature">
                <img src={temp} alt="thermometer" width={100} height={100} />
                <h3>Temperature</h3>
                {diagnosis.length > 0 && (
                    <div className="card-value-container">
                        <p className="card-value">{diagnosis[diagnosis.length - 1].temperature.value}°F</p>
                        <p className="card-status">{diagnosis[diagnosis.length - 1].temperature.levels}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiagnosisCards;
