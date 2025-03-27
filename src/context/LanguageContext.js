import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from 'i18next';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {

    const savedLanguage = localStorage.getItem('language') || i18next.language || 'sr';
    const [language, setLanguage] = useState(savedLanguage);

    useEffect(() => {
        i18next.changeLanguage(language);
        localStorage.setItem('language', language);
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
