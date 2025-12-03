// --- Core Translation Functions (Kept as is) ---

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

// Use let instead of const here as it's modified later, but fine as is.
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

            const targetAttribute = element.getAttribute('data-i18n-attr');

            if (targetAttribute) {
                element.setAttribute(targetAttribute, translationValue);
            } else {
                element.textContent = translationValue;
            }

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

// ------------------------------------------------------------------
// --- MERGED DOMContentLoaded BLOCK (The only one you should have) ---
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE MENU/TOGGLE SETUP
    const mobileToggle = document.querySelector('.custom-mobile-toggle');
    const navMenu = document.querySelector('.custom-navmenu');

    if (mobileToggle && navMenu) {
        // Toggle menu open/close and icon swap
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('icon-active');
            document.body.classList.toggle('mobile-menu-open');
        });

        // Close menu when a navigation link is clicked
        document.querySelectorAll('.custom-navmenu .main-links a').forEach(link => {
            // -------------------------------------------------------------------
            link.addEventListener('click', () => {
                // We use setTimeout to allow the browser to process the link's
                // navigation logic (e.g., anchor smooth scroll) before closing.
                setTimeout(() => {
                    if (navMenu.classList.contains('open')) {
                        navMenu.classList.remove('open');
                        mobileToggle.classList.remove('icon-active');
                        document.body.classList.remove('mobile-menu-open');
                    }
                }, 100); // 100ms delay to ensure link click processes
            });
        });
    }

    // ----------------------------------------------------

    // 2. LANGUAGE/LOCALIZATION SETUP

    // Initialize language setup
    const preferredLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
    setLanguage(preferredLocale);
    setupDropdownToggle(); // Setup dropdown show/hide logic

    const languageContainer = document.querySelector('.language-container');
    languageContainer.addEventListener('click', (event) => {

        const target = event.target.closest('[data-locale]');

        if (target) {
            event.preventDefault(); // Stop page jump

            const newLocale = target.getAttribute('data-locale');

            // Optimization: Only run setLanguage if the locale actually changes
            if (newLocale !== document.documentElement.lang) {
                setLanguage(newLocale);
            }

            const dropdownElement = target.closest('.dropdown');

            if (dropdownElement) {
                dropdownElement.classList.remove('show'); // Close the dropdown
            }
        }
    });
});