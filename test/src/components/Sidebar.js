import React, { useState } from 'react';

const Sidebar = ({ patients = [], setPatient, currentPatient }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPatients = patients.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '20px', color: '#1a202c' }}>Patients</h2>
            </div>
            <div style={{ paddingBottom: '20px' }}>
                <input 
                    type="text" 
                    placeholder="Search patients..." 
                    style={{ 
                        padding: '12px 16px', 
                        width: '100%', 
                        boxSizing: 'border-box', 
                        borderRadius: '24px', 
                        border: '1px solid #e2e8f0', 
                        outline: 'none',
                        backgroundColor: '#f8fafc',
                        fontSize: '14px'
                    }} 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <ul className="jes" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {filteredPatients.map(p => {
                    const isActive = currentPatient && currentPatient.name === p.name;
                    return (
                        <li 
                            key={p.name} 
                            onClick={() => setPatient(p)}
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                backgroundColor: isActive ? '#d8eafd' : 'transparent',
                            }}
                        >
                            <img 
                                src={p.profile_picture} 
                                alt={p.name} 
                                width="44" 
                                height="44"
                                style={{ borderRadius: '50%', marginRight: '12px', objectFit: 'cover' }} 
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontWeight: 'bold', color: '#1a202c', fontSize: '14px' }}>{p.name}</span>
                                <span style={{ fontSize: '13px', color: '#718096', marginTop: '2px' }}>
                                    {p.gender}, {p.age}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
