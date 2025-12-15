let lightboxInstance;

function getNestedTranslation(key, obj) {
    if (!key || typeof key !== 'string') return undefined;
    const parts = key.split('.');
    let current = obj;
    for (const part of parts) {
        if (current === undefined || current === null || current[part] === undefined) return undefined;
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
        const key1 = element.getAttribute('data-i18n-key');
        const attr1 = element.getAttribute('data-i18n-attr');
        const key2 = element.getAttribute('data-i18n-key-2');
        const attr2 = element.getAttribute('data-i18n-attr-2');

        const combineAttr = element.getAttribute('data-i18n-combine');

        const translation1 = getNestedTranslation(key1, translations);

        if (translation1 !== undefined && translation1 !== null) {
            if (combineAttr && key2) {
            } else if (attr1) {
                element.setAttribute(attr1, translation1);
            } else {
                element.textContent = translation1;
            }
        }

        let translation2 = null;
        if (key2 && attr2) {
            translation2 = getNestedTranslation(key2, translations);
            if (translation2 !== undefined && translation2 !== null) {
                element.setAttribute(attr2, translation2);
            }
        }

        if (combineAttr && key1 && key2) {
            if (translation2 === null) {
                translation2 = getNestedTranslation(key2, translations);
            }

            if (translation1 !== undefined && translation2 !== undefined) {
                const combinedTranslation = `${translation1} - ${translation2}`;
                element.setAttribute(combineAttr, combinedTranslation);
            }
        }
    });
}

function updateFlagIcon(locale) {
    if (flagImage) {
        flagImage.src = `images/icons/${locale}.svg`;
        flagImage.alt = `Jezik: ${LOCALE_NAMES[locale] || locale}`;
    }
}

async function setLanguage(locale) {
    await fetchTranslations(locale);
    if (Object.keys(translations).length === 0) {
        await fetchTranslations(DEFAULT_LOCALE);
    }

    translatePage();
    updateFlagIcon(locale);

    if (lightboxInstance) {
        lightboxInstance.reload();
    }

    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof GLightbox !== 'undefined') {
        lightboxInstance = GLightbox();
    }

    const mobileToggle = document.querySelector('.custom-mobile-toggle');
    const navMenu = document.querySelector('.custom-navmenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('icon-active');
            document.body.classList.toggle('mobile-menu-open');
        });
        document.querySelectorAll('.custom-navmenu .main-links a').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    if (navMenu.classList.contains('open')) {
                        navMenu.classList.remove('open');
                        mobileToggle.classList.remove('icon-active');
                        document.body.classList.remove('mobile-menu-open');
                    }
                }, 100);
            });
        });
    }

    const preferredLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
    setLanguage(preferredLocale);
    setupDropdownToggle();

    const languageContainer = document.querySelector('.language-container');
    if (languageContainer) {
        languageContainer.addEventListener('click', (event) => {
            const target = event.target.closest('[data-locale]');
            if (target) {
                event.preventDefault();
                const newLocale = target.getAttribute('data-locale');
                if (newLocale !== document.documentElement.lang) {
                    setLanguage(newLocale);
                }
                const dropdownElement = target.closest('.dropdown');
                if (dropdownElement) {
                    dropdownElement.classList.remove('show');
                }
            }
        });
    }
});