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

const LOCALE_MAPPER = {
    'en': 'en', 'en-US': 'en', 'en-GB': 'en', 'en-CA': 'en', 'en-AU': 'en',
    'en-IE': 'en', 'en-NZ': 'en', 'en-ZA': 'en', 'en-PH': 'en', 'en-SG': 'en', 'en-IN': 'en', 'en-MY': 'en',
    'sr': 'sr', 'sr-RS': 'sr', 'sr-Latn': 'sr', 'sr-Cyrl': 'sr', 'sr-ME': 'sr',
    'hr': 'sr', 'bs': 'sr', 'me': 'sr', 'mk': 'sr',
    'hr-HR': 'sr', 'bs-BA': 'sr', 'mk-MK': 'sr',
    'gr': 'gr', 'el': 'gr', 'el-GR': 'gr',
    'el-CY': 'gr'
};

const SUPPORTED_LOCALES = ['en', 'sr', 'gr'];

const RECOGNIZED_LOCALES = Object.keys(LOCALE_MAPPER);

const DEFAULT_LOCALE = 'en';

const LOCALE_NAMES = {
    'en': 'English',
    'sr': 'Srpski',
    'gr': 'Ελληνικά',
    'el': 'Ελληνικά'
};

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

function getBaseLocale(detectedLocale) {
    if (!detectedLocale) return DEFAULT_LOCALE;
    const code = detectedLocale.toLowerCase();

    if (LOCALE_MAPPER[code]) {
        return LOCALE_MAPPER[code];
    }

    const baseCode = code.split('-')[0];
    if (LOCALE_MAPPER[baseCode]) {
        return LOCALE_MAPPER[baseCode];
    }

    return DEFAULT_LOCALE;
}


async function fetchTranslations(locale) {
    try {
        const response = await fetch(`lang/${locale}.json`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        translations = await response.json();
    } catch (error) {
        console.error(`Error fetching translations for ${locale}.`, error);
        translations = {};
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
            if (attr1 && !combineAttr) {
                element.setAttribute(attr1, translation1);
            } else if (!attr1 && !combineAttr) {
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
    const baseLocale = getBaseLocale(locale);

    if (flagImage) {
        flagImage.src = `images/icons/${baseLocale}.svg`;
        flagImage.alt = `Jezik: ${LOCALE_NAMES[baseLocale] || baseLocale}`;
    }
}

async function setLanguage(rawLocale) {
    const localeToUse = getBaseLocale(rawLocale);

    if (!SUPPORTED_LOCALES.includes(localeToUse)) {
        setLanguage(DEFAULT_LOCALE);
        return;
    }

    await fetchTranslations(localeToUse);

    translatePage();
    updateFlagIcon(localeToUse);

    if (lightboxInstance) {
        lightboxInstance.reload();
    }
    document.documentElement.lang = localeToUse;
    localStorage.setItem('locale', localeToUse);
}

function getBrowserLocale() {
    const browserLanguages = navigator.languages || [navigator.language];

    for (const lang of browserLanguages) {
        const fullCode = lang.toLowerCase();

        if (RECOGNIZED_LOCALES.includes(fullCode)) {
            return fullCode;
        }

        const baseCode = lang.split('-')[0].toLowerCase();
        if (RECOGNIZED_LOCALES.includes(baseCode)) {
            return baseCode;
        }
    }
    return DEFAULT_LOCALE;
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

    let preferredLocale = localStorage.getItem('locale');

    if (!preferredLocale) {
        preferredLocale = getBrowserLocale();
    } else {
        const baseLocale = getBaseLocale(preferredLocale);
        if (!SUPPORTED_LOCALES.includes(baseLocale)) {
            preferredLocale = DEFAULT_LOCALE;
        }
    }

    setLanguage(preferredLocale);
    setupDropdownToggle();

    const languageContainer = document.querySelector('.language-container');
    if (languageContainer) {
        languageContainer.addEventListener('click', (event) => {
            const target = event.target.closest('[data-locale]');
            if (target) {
                event.preventDefault();
                const newLocale = target.getAttribute('data-locale');
                const newBaseLocale = getBaseLocale(newLocale);
                const currentBaseLocale = document.documentElement.lang;

                if (newBaseLocale !== currentBaseLocale) {
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