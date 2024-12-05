
import React from 'react';

const LabResults = ({ results }) => {
    if (!results || results.length === 0) {
        return <p>No lab results available.</p>;
    }

    return (
        <div className="lab-results">
            <h3>Lab Results</h3>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default LabResults;

