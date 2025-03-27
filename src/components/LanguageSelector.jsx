import React, { useState, useEffect } from "react";
import { NavDropdown } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import i18n from '../i18n';

const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
    };

    return (
        <NavDropdown title={language === 'en' ? 'English' : language === 'sr' ? 'Srpski' : 'Ελληνικά'} id="language-dropdown">
            <NavDropdown.Item as="button" onClick={() => handleLanguageChange('sr')}>
                <img src="../assets/lang-flags/sr.svg" alt="Serbian" width="20" height="14" /> &nbsp;
            </NavDropdown.Item>
            <NavDropdown.Item as="button" onClick={() => handleLanguageChange('gr')}>
                <img src="../assets/lang-flags/gr.svg" alt="Greek" width="20" height="14" /> &nbsp;
            </NavDropdown.Item>
            <NavDropdown.Item as="button" onClick={() => handleLanguageChange('en')}>
                <img src="../assets/lang-flags/en.svg" alt="English" width="20" height="14" /> &nbsp;
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default LanguageSelector;
