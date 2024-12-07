import React from 'react';
import lung from "../asset/lung.png";
import heart from "../asset/heart-attack.png";
import temp from "../asset/thermometer.png";
const DiagnosisCards = ({ diagnosis }) => {
    if (!diagnosis) {
        return <p>Diagnosis data is unavailable.</p>;
    }


    return (
        <div className="diagnosis-cards">
          <div className="card">
          <img src={lung} alt="bbm_img" width={100} height={100} style={{cursor:'pointer'}}/>
  <h3> Respiratory Rate</h3>
  {diagnosis.length > 0 && (
    <div key={diagnosis.length - 1}>
      <p>{diagnosis[diagnosis.length - 1].respiratory_rate.value} bbm</p>
      <p>{diagnosis[diagnosis.length - 1].respiratory_rate.levels}</p>
    </div>
  )}
  </div>
       
      

            <div className="card">
            <img src={heart} alt="bbm_img" width={100} height={100} style={{cursor:'pointer'}}/>
                <h3>Heart Rate</h3>
                {diagnosis.length > 0 && (
    <div key={diagnosis.length - 1}>
      <p>{diagnosis[diagnosis.length - 1].heart_rate.value}bbm</p>
      <p>{diagnosis[diagnosis.length - 1].heart_rate.levels}</p>
    </div>
  )}


            </div>

            <div className="card">

            <img src={temp} alt="bbm_img" width={100} height={100} style={{cursor:'pointer'}}/>
                <h3>Temperature</h3>
           
                {diagnosis.length > 0 && (
    <div key={diagnosis.length - 1}>
      <p>{diagnosis[diagnosis.length - 1].temperature.value}F</p>
      <p>{diagnosis[diagnosis.length - 1].temperature.levels}</p>
    </div>
  )}

            </div>
        </div>

    );
};

export default DiagnosisCards;
