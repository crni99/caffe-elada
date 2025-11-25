import React from 'react';

const DrinksItem = ({ name, volume, price, description }) => {
    const displayVolume = volume ? `(${volume})` : '';

    return (
        <li className="list-group-item w-100">
            <div className="d-flex justify-content-between align-items-baseline pt-2 pb-1">
                <h5 className="fw-bold mb-0 me-3">
                    {name} <small className="text-muted fw-normal">{displayVolume}</small>
                </h5>
                <p className="mb-0 text-nowrap">
                    <strong className="text-dark">{price}</strong>
                </p>
            </div>
            {description && (
                <div className="d-flex justify-content-start pb-1">
                    <p className="mb-0">
                        <small className="text-secondary fst-italic">{description}</small>
                    </p>
                </div>
            )}
        </li>
    );
};

export default DrinksItem;