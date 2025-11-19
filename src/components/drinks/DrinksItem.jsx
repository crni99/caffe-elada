import React from 'react';

const DrinksItem = ({ name, volume, price, description }) => {
    const displayVolume = volume ? `(${volume})` : ''; 

    return (
        <li className="list-group-item w-100">
            <div className="d-flex flex-column justify-content-center align-items-center w-100 text-center pt-2 pb-2">
                <h5 className="fw-bold mb-0">
                    {name} {displayVolume}
                </h5>
                <p className="mb-0"><small className="text-muted">{price}</small></p>
                {description && (
                    <p className="mb-0 pt-1">
                        <small className="text-secondary">{description}</small>
                    </p>
                )}
            </div>
        </li>
    );
};

export default DrinksItem;