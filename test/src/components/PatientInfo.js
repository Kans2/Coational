import React from "react";
const PatientInfo = ({ patient }) => {
    if (!patient) return <p>No patient information available</p>;

    return (
        <div className="patient-info">
            <img src={patient.profile_picture} alt={`${patient.name}`} />
            <h2>{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Date of Birth: {patient.date_of_birth}</p>
            <p>Contact Info: {patient.emergency_contact || 'N/A'}</p>
        </div>
    );
};
export default PatientInfo;
