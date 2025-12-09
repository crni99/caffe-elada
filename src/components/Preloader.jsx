import React from 'react';

const Preloader = ({ logoSrc, className }) => {
    return (
        <div className={`preloader-overlay ${className}`}>
            <img src={logoSrc} alt="Loading Logo" className="preloader-logo" />
        </div>
    );
};

export default Preloader;