import React from 'react';
import { useTranslation } from 'react-i18next';
import DrinksItem from './DrinksItem';

const DrinksList = ({ name, items = [], creator }) => {

    const { t } = useTranslation();

    return (
        <div className="container mt-5 mb-4 pb-3 px-3 py-3 rounded shadow-lg section drink-wrapper">
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h2 className="display-6 pt-2 menu-title">{name}</h2>
                    {creator && (
                        <h3 className="h6 text-muted fst-italic mt-1 creator-title">
                            {t('Drinks.createdBy')}&nbsp;
                            <a href="https://www.instagram.com/zorz_papadubi2/" data-discover="true"
                                target="_blank" rel="noopener noreferrer">
                                {creator}
                            </a>
                        </h3>
                    )}
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
