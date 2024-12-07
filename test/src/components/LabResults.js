
import React from 'react';
import { TbDownload } from "react-icons/tb";

const LabResults = ({ results }) => {
    if (!results || results.length === 0) {
        return <p>No lab results available.</p>;
    }

    return (
        <div className="lab-results">
            <h3>Lab Results</h3>
            <ul>
                {results.map((result, index) => (
                    <li key={index} style={{display:'flex',justifyContent:'space-between'}}>{result} <TbDownload style={{cursor:'pointer'}}/> </li>
                ))}
            </ul>
        </div>
    );
};

export default LabResults;

