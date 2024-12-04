import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PatientInfo from './components/PatientInfo';
import BloodPressureGraph from './components/BloodPressureGraph';
import DiagnosisCards from './components/DiagnosisCards';
import DiagnosticList from './components/DiagnosticList';
import LabResults from './components/LabResults';

const App = () => {
    const [patient, setPatient] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_ENDPOINT = 'https://fedskillstest.coalitiontechnologies.workers.dev';
        const USERNAME = 'coalition';
        const PASSWORD = 'skills-test';

        // Fetch data with Basic Authentication
        const fetchData = async () => {
            try {
                const response = await fetch(API_ENDPOINT, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`, 
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('API Response:', data);

                // Finding Jessica Taylor's data
                const jessica = data.find(p => p.name === 'Jessica Taylor');
                if (jessica) {
                    jessica.diagnosisOverview = jessica.diagnosisOverview || {
                        respiratoryRate: 'N/A',
                        heartRate: 'N/A',
                        oxygenSaturation: 'N/A',
                    };
                }
                console.log('Jessica Taylor Data:', jessica);

                if (!jessica) {
                    throw new Error('Jessica Taylor data not found in API response');
                }

                setPatient(jessica);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    if (loading) return <p>Loading...</p>;

    
    if (error) return <p>Error: {error}</p>;

    
    return (
        <div className="app">
            <Sidebar />
            <main>
                <PatientInfo patient={patient} />
                <BloodPressureGraph data={patient.bloodPressureHistory || []} />
                <DiagnosisCards diagnosis={patient.diagnosisOverview || {}} />
                <DiagnosticList diagnostics={patient.diagnostics || []} />
                <LabResults results={patient.labResults || []} />
            </main>
        </div>
    );
};

export default App;
