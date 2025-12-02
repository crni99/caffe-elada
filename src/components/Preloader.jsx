import React from 'react';

const Preloader = ({ logoSrc }) => {
    return (
        <div className='preloader-overlay'>
            <img src={logoSrc} alt="Loading Logo" className="preloader-logo" />
        </div>
    );
};

export default Preloader;