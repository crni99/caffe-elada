import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationsInEnglish from "../locales/en/translation.json";
import translationsInSerbian from "../locales/sr/translation.json";
import translationsInGreek from "../locales/gr/translation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationsInEnglish },
            sr: { translation: translationsInSerbian },
            gr: { translation: translationsInGreek },
        },
        debug: false,
        saveMissing: process.env.NODE_ENV === 'development',
        missingKeyHandler: process.env.NODE_ENV === 'development'
            ? (lngs, ns, key) => {
                console.warn(`[i18n] Missing key: "${key}" for language(s): [${lngs.join(', ')}]`);
            }
            : false,
        fallbackLng: {
            'hr': ['sr', 'en'],
            'bs': ['sr', 'en'],
            'me': ['sr', 'en'],
            'mk': ['sr', 'en'],
            'hr-HR': ['sr', 'en'],
            'bs-BA': ['sr', 'en'],
            'mk-MK': ['sr', 'en'],
            'el-GR': ['gr', 'en'],
            'el-CY': ['gr', 'en'],
            'default': ['en']
        },
        supportedLngs: [
            "en", "sr", "gr",
            "en-US", "en-GB", "en-CA", "en-AU",
            "en-IE", "en-NZ", "en-ZA", "en-PH", "en-SG", "en-IN", "en-MY",
            "sr-RS", "sr-Latn", "sr-Cyrl", "sr-ME",
            "el", "el-GR", "el-CY"
        ],
        nonExplicitSupportedLngs: true,
        load: 'currentOnly',
        interpolation: { escapeValue: false },
        ns: "translation",
        defaultNS: "translation",
    });

export default i18n;