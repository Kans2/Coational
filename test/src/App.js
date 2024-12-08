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
    <aside className="sidebar">
        <nav>
            <Sidebar />
        </nav>
    </aside>

    <main className="main-content">
        <section className="blood-pressure-graph">
            <h2>diagnosis History</h2>
            <BloodPressureGraph data={patient.diagnosis_history || []} />
        </section>

        <section className="diagnosis-cards">
            <h2>Diagnosis</h2>
            <DiagnosisCards diagnosis={patient.diagnosis_history || {}} />
        </section>

        <section className="diagnostic-list">
            <h2>Diagnostic List</h2>
            <DiagnosticList diagnostics={patient.diagnostic_list || []} />
        </section>
    </main>

    <aside className="right-sidebar">
        <section className="patient-info">
            <h2>Patient Information</h2>
            <PatientInfo patient={patient} />
        </section>

        <section className="lab-results">
            <h2>Lab Results</h2>
            <LabResults results={patient.lab_results || []} />
        </section>
    </aside>
</div>

    
    
    );
};

export default App;
