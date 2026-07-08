import { useState, useEffect } from 'react';
import i18n from '../i18n';

export function useLanguage() {
    const [language, setLanguage] = useState(i18n.language || 'sr');

    useEffect(() => {
        const handleChange = (lng) => setLanguage(lng);
        i18n.on('languageChanged', handleChange);
        return () => i18n.off('languageChanged', handleChange);
    }, []);

    return {
        language,
        changeLanguage: (lang) => i18n.changeLanguage(lang),
    };
}