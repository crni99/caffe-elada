import React from 'react';

const Preloader = ({ logoSrc, className }) => {
    return (
        <div className={`preloader-overlay ${className}`}>
            <img src={logoSrc} alt="Loading Logo" className="preloader-logo"
                width="192" height="192" />
        </div>
    );
};

export default Preloader;