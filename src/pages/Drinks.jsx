import { useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DrinksList from '../components/drinks/DrinksList';
import {
    COFFEE_DRINKS_DATA, HOT_DRINKS_DATA, WATER_DRINKS_DATA, JUICES_DRINKS_DATA,
    ENERGY_DRINKS_DATA, BEERS_DRINKS_DATA, CIDERS_DRINKS_DATA, WINES_DRINKS_DATA,
    LIKERS_DRINKS_DATA, RAKIJAS_DRINKS_DATA, SPIRITS_DATA, COCKTAILS_DRINKS_DATA
} from '../components/drinks/drinksData';

const ROW_SIZES = [5, 4, 4];

const getFilterKey = (nameKey) => {
    const categoryName = nameKey.split('.')[1];
    return categoryName.replace(/([A-Z])/g, '-$1').toLowerCase();
};

export default function DrinksPage() {

    const cocktailsRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get('filter') || '*';
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

    const filterGroups = useMemo(() => {
        const allItem = { nameKey: 'Drinks.all', filterKey: '*' };
        const allItems = [allItem, ...drinkCategories.map(c => ({ nameKey: c.nameKey, filterKey: getFilterKey(c.nameKey) }))];
        let offset = 0;
        return ROW_SIZES.map(size => {
            const row = allItems.slice(offset, offset + size);
            offset += size;
            return row;
        });
    }, [drinkCategories]);

    useEffect(() => {
        const handleHash = () => {
            const hash = decodeURI(window.location.hash.replace('#', ''));
            if (!hash) return;

            const targetKey = hash === 'kokteli' ? 'Drinks.cocktails' : hash;
            const target = drinkCategories.find(c => c.nameKey === targetKey);
            if (!target) return;

            setSearchParams({ filter: getFilterKey(target.nameKey) }, { replace: true });

            setTimeout(() => {
                if (cocktailsRef.current) {
                    const top = cocktailsRef.current.getBoundingClientRect().top + window.pageYOffset - 180;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 400);
        };

        handleHash();
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, [drinkCategories, setSearchParams]);

    const isVisible = (category) =>
        activeFilter === '*' || getFilterKey(category.nameKey) === activeFilter;

    return (
        <main>
            <section id="hero" className="hero section light-background">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="hero-content">
                        <div className="row align-items-center">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <div className="content">
                                    <div className="container section-title-h1 section light-background" data-aos="fade-up">
                                        <h1>{t('Drinks.title')}</h1>
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
                    <div className="gallery isotope-layout mt-3 mb-3">
                        <div className="row">
                            <div className="col-12">
                                {filterGroups.map((rowItems, rowIndex) => (
                                    <ul
                                        key={rowIndex}
                                        className={`gallery-filters filter-row-${rowIndex}`}
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', marginBottom: '16px' }}
                                    >
                                        {rowItems.map((item) => (
                                            <li
                                                key={item.filterKey}
                                                className={activeFilter === item.filterKey ? 'filter-active' : ''}
                                                onClick={() => setSearchParams(item.filterKey === '*' ? {} : { filter: item.filterKey })}
                                            >
                                                {t(item.nameKey)}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {drinkCategories.map((category) => (
                            <div
                                id={category.nameKey}
                                key={category.nameKey}
                                ref={category.nameKey === 'Drinks.cocktails' ? cocktailsRef : null}
                                className={`col-12 drinks-filter-item ${isVisible(category) ? 'drinks-filter-visible' : 'drinks-filter-hidden'}`}
                            >
                                <DrinksList
                                    name={t(category.nameKey)}
                                    items={category.data}
                                    creator={category.creator}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}