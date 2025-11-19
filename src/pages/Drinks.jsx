import React from 'react';
import { useTranslation } from 'react-i18next';
import MainTitle from '../components/MainTitle';
import DrinksList from '../components/drinks/DrinksList';
import {
    COFFEE_DRINKS_DATA, HOT_DRINKS_DATA, WATER_DRINKS_DATA, JUICES_DRINKS_DATA, WINES_DRINKS_DATA, COCKTAILS_DRINKS_DATA,
    BEERS_DRINKS_DATA, ENERGY_DRINKS_DATA, CIDERS_DRINKS_DATA, RAKIJAS_DRINKS_DATA, HARD_DRINKS_DATA,
    LIKERS_DRINKS_DATA
} from '../components/drinks/drinksData';

export default function DrinksPage() {

    const { t } = useTranslation();

    const drinkCategories = [
        { nameKey: 'Drinks.coffee', data: COFFEE_DRINKS_DATA },
        { nameKey: 'Drinks.hotDrinks', data: HOT_DRINKS_DATA },
        { nameKey: 'Drinks.water', data: WATER_DRINKS_DATA },
        { nameKey: 'Drinks.juices', data: JUICES_DRINKS_DATA },
        { nameKey: 'Drinks.energy', data: ENERGY_DRINKS_DATA },
        { nameKey: 'Drinks.beers', data: BEERS_DRINKS_DATA },
        { nameKey: 'Drinks.ciders', data: CIDERS_DRINKS_DATA },
        { nameKey: 'Drinks.wines', data: WINES_DRINKS_DATA },
        { nameKey: 'Drinks.likers', data: LIKERS_DRINKS_DATA },
        { nameKey: 'Drinks.rakijas', data: RAKIJAS_DRINKS_DATA },
        { nameKey: 'Drinks.hardDrinks', data: HARD_DRINKS_DATA },
        { nameKey: 'Drinks.cocktails', data: COCKTAILS_DRINKS_DATA },
    ];

    return (
        <>
            <MainTitle title={t('Drinks')} />

            <div className="container mt-5">
                <h1 className="display-3 text-center text-white mb-4">
                    {t('Drinks.title')}
                </h1>
                <p className="lead text-center text-muted">
                    {t('Drinks.subTitle')}
                </p>
            </div>

            {drinkCategories.map((category) => (
                <DrinksList
                    name={t(category.nameKey)}
                    items={category.data}
                    key={category.nameKey}
                />
            ))}

        </>
    );
}