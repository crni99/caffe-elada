import React from 'react';
import { useTranslation } from 'react-i18next';
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
            <section id="hero" className="hero section light-background">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="hero-content">
                        <div className="row align-items-center">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <div className="content">
                                    <div className="container section-title section light-background" data-aos="fade-up">
                                        <h2>{t('Drinks.title')}</h2>
                                        <p className='text-muted'>{t('Drinks.subTitle')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section id="drinks-menu" className="drinks-menu section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        {drinkCategories.map((category) => (
                            <div
                                key={category.nameKey}
                                className="col-12 mb-4"
                            >
                                <DrinksList
                                    name={t(category.nameKey)}
                                    items={category.data}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}