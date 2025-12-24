import React from 'react';
import logo from '../assets/logo.svg';

const Preloader = ({ className }) => {
    return (
        <div className={`preloader-overlay ${className}`}>
            <img src={logo} alt="Loading Logo" className="preloader-logo"
                width="192" height="192" />
        </div>
    );
};

export default Preloader;