import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PatientInfo from './components/PatientInfo';
import BloodPressureGraph from './components/BloodPressureGraph';
import DiagnosisCards from './components/DiagnosisCards';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';

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
        <div className="app">
            <Sidebar />
            <main>
                <PatientInfo patient={patient} />
                <BloodPressureGraph data={patient.bloodPressureHistory || []} />
                <DiagnosisCards diagnosis={patient.diagnosisOverview || {}} />
                <DiagnosticList diagnostics={patient.diagnostic_list || []} />
                <LabResults results={patient.lab_results || []} />
            </main>
        </div>
    );
};

export default App;
