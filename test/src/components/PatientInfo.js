import React from "react";
const PatientInfo = ({ patient }) => {
    if (!patient) return <p>No patient information available</p>;

    return (
        <div className="patient-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={patient.profile_picture} alt={`${patient.name}`} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '16px', objectFit: 'cover' }} />
            <h2 style={{ margin: '0 0 24px 0', color: '#1a202c' }}>{patient.name}</h2>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '14px', color: '#718096', display: 'block' }}>Date Of Birth</span>
                        <span style={{ fontWeight: '600', color: '#1a202c' }}>{patient.date_of_birth}</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '14px', color: '#718096', display: 'block' }}>Gender</span>
                        <span style={{ fontWeight: '600', color: '#1a202c' }}>{patient.gender}</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '14px', color: '#718096', display: 'block' }}>Contact Info</span>
                        <span style={{ fontWeight: '600', color: '#1a202c' }}>{patient.phone_number}</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '14px', color: '#718096', display: 'block' }}>Emergency Contacts</span>
                        <span style={{ fontWeight: '600', color: '#1a202c' }}>{patient.emergency_contact}</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <span style={{ fontSize: '14px', color: '#718096', display: 'block' }}>Insurance Provider</span>
                        <span style={{ fontWeight: '600', color: '#1a202c' }}>{patient.insurance_type}</span>
                    </div>
                </div>
            </div>
            
            <button style={{ marginTop: '32px', backgroundColor: '#007aff', color: 'white', border: 'none', borderRadius: '24px', padding: '12px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '14px' }}>
                Show All Information
            </button>
        </div>
    );
};
export default PatientInfo;
