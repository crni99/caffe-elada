function getNestedTranslation(key, obj) {
    if (!key || typeof key !== 'string') {
        return undefined;
    }
    const parts = key.split('.');
    let current = obj; 

    for (const part of parts) {
        if (current === undefined || current === null || current[part] === undefined) {
            return undefined; 
        }
        current = current[part];
    }
    return current;
}

const LOCALE_NAMES = {
    'en': 'English',
    'sr': 'Srpski',
    'gr': 'Ελληνικά'
};
const DEFAULT_LOCALE = 'sr';

let translations = {};
const flagImage = document.querySelector('.language-dropdown img');

function setupDropdownToggle() {
    const dropdownToggle = document.getElementById('language-dropdown');
    if (!dropdownToggle) return; 
    
    const dropdownContainer = dropdownToggle.closest('.dropdown');

    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownContainer.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!dropdownContainer.contains(event.target) && dropdownContainer.classList.contains('show')) {
            dropdownContainer.classList.remove('show');
        }
    });
}

async function fetchTranslations(locale) {
    try {
        const response = await fetch(`lang/${locale}.json`);
        translations = await response.json();
    } catch (error) {
        console.error(`Error fetching translations for ${locale}.`, error);
    }
}

function translatePage() {
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        const translationValue = getNestedTranslation(key, translations);
        if (translationValue !== undefined && translationValue !== null) {
            element.textContent = translationValue;
        } else {
            console.warn(`Translation key missing or path invalid: ${key}`);
        }
    });
}

function updateFlagIcon(locale) {
    if (flagImage) {
        const flagSrc = `images/icons/${locale}.svg`;
        flagImage.src = flagSrc;
        flagImage.alt = `Flag of ${LOCALE_NAMES[locale] || locale}`;
    }
}

async function setLanguage(locale) {
    await fetchTranslations(locale);

    if (Object.keys(translations).length === 0) {
        await fetchTranslations(DEFAULT_LOCALE);
    }
    
    translatePage();
    updateFlagIcon(locale);
    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
    setLanguage(preferredLocale);
    setupDropdownToggle();

    const languageContainer = document.querySelector('.language-container');
    languageContainer.addEventListener('click', (event) => {
        const target = event.target.closest('[data-locale]');
        if (target) {
            const newLocale = target.getAttribute('data-locale');
            setLanguage(newLocale);
            const dropdownElement = target.closest('.dropdown');
            if (dropdownElement) {
                dropdownElement.classList.remove('show');
            }
        }
    });
});