import React from 'react';
import DrinksItem from './DrinksItem';

const DrinksList = ({ name, items = [] }) => {
    return (
        <div className="container mt-5 mb-4 pb-3 px-3 py-3 rounded shadow-lg section drink-wrapper"
            data-aos="fade-up" data-aos-duration="2000">
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h2 className="display-6 pt-2 menu-title">{name}</h2>
                </div>
            </div>
            <ul className="list-group list-group-flush rounded">
                {items.map(item => (
                    <DrinksItem
                        key={item.id}
                        name={item.name}
                        volume={item.volume}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DrinksList;