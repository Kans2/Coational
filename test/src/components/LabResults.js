// src/components/LabResults.js
import React from 'react';

const LabResults = ({ results }) => {
    if (!results || results.length === 0) return <p>No lab results available.</p>;

    return (
        <ul>
                {results.map((result, index) => (
                <li key={index}>
                    <h4>{result.testName}</h4>
                    <p>{result.result}</p>
                </li>
            ))}
        </ul>
    );
};

export default LabResults;
