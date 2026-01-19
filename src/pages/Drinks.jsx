import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DrinksList from '../components/drinks/DrinksList';
import {
    COFFEE_DRINKS_DATA, HOT_DRINKS_DATA, WATER_DRINKS_DATA, JUICES_DRINKS_DATA,
    ENERGY_DRINKS_DATA, BEERS_DRINKS_DATA, CIDERS_DRINKS_DATA, WINES_DRINKS_DATA,
    LIKERS_DRINKS_DATA, RAKIJAS_DRINKS_DATA, SPIRITS_DATA, COCKTAILS_DRINKS_DATA
} from '../components/drinks/drinksData';
import Isotope from 'isotope-layout';

const getFilterDataAttribute = (nameKey) => {
    const categoryName = nameKey.split('.')[1];
    const kebabCase = categoryName.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `.filter-${kebabCase}`;
};

export default function DrinksPage() {

    const isotopeContainerRef = useRef(null);
    const isotopeInstance = useRef(null);
    const cocktailsRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('*');
    const { t } = useTranslation();

    const drinkCategories = useMemo(() => [
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
        { nameKey: 'Drinks.spirits', data: SPIRITS_DATA },
        { nameKey: 'Drinks.cocktails', data: COCKTAILS_DRINKS_DATA, creator: 'Aleksandar Grabovčić' },
    ], []);

    const allFilterItem = { nameKey: 'Drinks.all', dataFilter: '*', filterLabel: t('Drinks.all') || 'All' };

    const allFilters = [allFilterItem, ...drinkCategories];

    const groups = [
        allFilters.slice(0, 5),
        allFilters.slice(5, 9),
        allFilters.slice(9, 13),
    ];

    const renderFilterItem = (category) => {
        const dataFilterValue = category.dataFilter || getFilterDataAttribute(category.nameKey);
        const className = activeFilter === dataFilterValue ? 'filter-active' : '';

        return (
            <li
                key={category.dataFilter || category.nameKey}
                data-filter={dataFilterValue}
                className={className}
                onClick={() => handleFilterClick(dataFilterValue)}
            >
                {category.filterLabel || t(category.nameKey)}
            </li>
        );
    };

    useEffect(() => {
        const container = isotopeContainerRef.current;
        if (!container || typeof Isotope === 'undefined') return;

        isotopeInstance.current = new Isotope(container, {
            itemSelector: '.isotope-item',
            layoutMode: 'vertical',
            percentPosition: true,
            transitionDuration: '0.6s'
        });

        const timeout = setTimeout(() => isotopeInstance.current.layout(), 300);

        return () => {
            if (isotopeInstance.current) {
                isotopeInstance.current.destroy();
                isotopeInstance.current = null;
            }
            clearTimeout(timeout);
        };
    }, []);


    useEffect(() => {
        if (isotopeInstance.current) {
            isotopeInstance.current.arrange({ filter: activeFilter });
        }
    }, [activeFilter]);

    const handleFilterClick = (newFilter) => {
        if (isotopeInstance.current) {
            setActiveFilter(newFilter);
        }
    };

    useEffect(() => {
        const handleInitialHash = () => {
            const hash = decodeURI(window.location.hash.replace('#', ''));
            if (!hash) return;

            const targetKey = hash === 'kokteli' ? 'Drinks.cocktails' : hash;
            const targetCategory = drinkCategories.find(cat => cat.nameKey === targetKey);

            if (targetCategory) {
                const filterClass = getFilterDataAttribute(targetCategory.nameKey);
                setActiveFilter(filterClass);

                setTimeout(() => {
                    if (cocktailsRef.current) {
                        const headerOffset = 180;
                        const elementPosition = cocktailsRef.current.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 1000);
            }
        };

        handleInitialHash();
        window.addEventListener('hashchange', handleInitialHash);
        return () => window.removeEventListener('hashchange', handleInitialHash);
    }, [drinkCategories]);

    return (
        <main>
            <section id="hero" className="hero section light-background">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="hero-content">
                        <div className="row align-items-center">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <div className="content">
                                    <div className="container section-title-h1 section light-background" data-aos="fade-up">
                                        <h1>
                                            {t('Drinks.title')}
                                        </h1>
                                        <p className='text-muted'>{t('Drinks.subTitle')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="drinks-menu" className="drinks-menu section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="gallery isotope-layout mt-3 mb-3" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <div className='row'>
                            <div className='col-12'>
                                {groups.map((rowItems, index) => (
                                    <ul
                                        key={index}
                                        className={`gallery-filters isotope-filters filter-row-${index}`}
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', marginBottom: '16px' }}
                                    >
                                        {rowItems.map(renderFilterItem)}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={isotopeContainerRef}>
                        {drinkCategories.map((category) => {
                            const isCocktails = category.nameKey === 'Drinks.cocktails';
                            const categoryClassName = getFilterDataAttribute(category.nameKey).substring(1);
                            return (
                                <div
                                    id={category.nameKey}
                                    key={category.nameKey}
                                    ref={isCocktails ? cocktailsRef : null}
                                    className={`col-12 mb-4 isotope-item ${categoryClassName}`}
                                >
                                    <DrinksList
                                        name={t(category.nameKey)}
                                        items={category.data}
                                        creator={category.creator}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}