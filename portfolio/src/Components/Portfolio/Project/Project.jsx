import React from 'react';
import '../../../assets/Style/style.css'

export const Project = ({ Image, Name, Link, Description,}) => {
    return (
        <div className="project-card">
            <a href={Link} target="_blank" rel="noopener noreferrer">
                <img src={Image} alt={Name} />
                <h3>{Name}</h3>
                <p>{Description}</p>
            </a>
        </div>
    );
};
