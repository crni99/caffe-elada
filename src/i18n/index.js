import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

(async function () {
    const translationsInEnglish = await import("../locales/en/translation.json");
    const translationsInSerbian = await import("../locales/sr/translation.json");
    const translationsInGreek = await import("../locales/gr/translation.json");

    const resources = {
        en: { translation: translationsInEnglish.default },
        sr: { translation: translationsInSerbian.default },
        gr: { translation: translationsInGreek.default }
    };

    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            debug: false,
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
})();

export default i18n;