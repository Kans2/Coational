import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PatientInfo from './components/PatientInfo';
import BloodPressureGraph from './components/BloodPressureGraph';
import DiagnosisCards from './components/DiagnosisCards';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';
//import Pressure from './components/Pressure';

const App = () => {
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const API_ENDPOINT = 'https://fedskillstest.coalitiontechnologies.workers.dev';
        const USERNAME = 'coalition'; 
        const PASSWORD = 'skills-test'; 

        
        fetch(API_ENDPOINT, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`, 
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
            
                const jessica = data.find(p => p.name === 'Jessica Taylor');
                setPatient(jessica);

                console.log("jesica data",jessica);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!patient) return <p>Loading patient data...</p>;

    return (
        <div className="app-container">
        {/* Sidebar (Left Sidebar) */}
        <div className="sidebar">
            <Sidebar />
        </div>
    
        {/* Main Content */}
        <div className="main-content">
            {/* Blood Pressure Graph */}
            <div className="blood-pressure-graph">
                <BloodPressureGraph data={patient.diagnosis_history || []} />
            </div>
    
            {/* Diagnosis Cards */}
            <div className="diagnosis-cards">
                <DiagnosisCards diagnosis={patient.diagnosis_history|| {}} />
            </div>
    
            {/* Diagnostic List */}
            <div className="diagnostic-list">
                <DiagnosticList diagnostics={patient.diagnostic_list || []} />
            </div>
        </div>
    
        {/* Right Sidebar */}
        <div className="right-sidebar">
            {/* Patient Info */}
            <div className="patient-info">
                <PatientInfo patient={patient} />
            </div>
    
            {/* Lab Results */}
            <div className="lab-results">
                <LabResults results={patient.lab_results || []} />
            </div>
        </div>
    </div>
    
    
    );
};

export default App;
