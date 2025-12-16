import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from 'i18next';

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    
    const [language, setLanguage] = useState(i18next.language || 'en'); 

    useEffect(() => {
        
        const handleLanguageChange = (lng) => {
            setLanguage(lng);
            localStorage.setItem('language', lng); 
        };
        i18next.on('languageChanged', handleLanguageChange);

        if (i18next.language) {
            handleLanguageChange(i18next.language);
        }

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const changeLanguage = (lang) => {
        i18next.changeLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};