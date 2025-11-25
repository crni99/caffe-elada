import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import flagSr from "../assets/lang-flags/sr.svg";
import flagEn from "../assets/lang-flags/en.svg";
import flagGr from "../assets/lang-flags/gr.svg";

export default function Header() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
    };

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                    <img src="/assets/images/EladaLogoV2.svg" alt="Elada Logo" />
                </Link>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/" className="active">{t("Home")}</Link></li>
                        <li><Link to="#gallery">{t("Gallery.title")}</Link></li>
                        <li><Link to="/drinks">{t("Drinks.title")}</Link></li>
                        <li><Link to="#contact">{t("Contact")}</Link></li>
                    </ul>
                </nav>
                <NavDropdown
                    title={
                        <img
                            src={
                                language === 'sr' ? flagSr : language === 'gr' ? flagGr : flagEn
                            }
                            alt="Language Flag"
                            width="20"
                            height="14"
                        />
                    }
                    id="language-dropdown-header-btn"
                    align="end"
                    className="btn-getstarted"
                >
                    <NavDropdown.Item onClick={() => handleLanguageChange('sr')}>
                        &nbsp;<img src={flagSr} alt="Serbian" width="20" height="14" /> &nbsp;
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleLanguageChange('gr')}>
                        &nbsp;<img src={flagGr} alt="Greek" width="20" height="14" /> &nbsp;
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleLanguageChange('en')}>
                        &nbsp;<img src={flagEn} alt="English" width="20" height="14" /> &nbsp;
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </header>
    );
}