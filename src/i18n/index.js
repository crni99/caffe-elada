import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
        .use(initReactI18next)
        .init({
            resources,
            lng: "sr",
            debug: false,
            fallbackLng: "en",
            interpolation: { escapeValue: false },
            ns: "translation",
            defaultNS: "translation"
        });
})();

export default i18n;
