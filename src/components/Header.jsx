import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import flagSr from "../assets/lang-flags/sr.svg";
import flagEn from "../assets/lang-flags/en.svg";
import flagGr from "../assets/lang-flags/gr.svg";

export default function Header() {

    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();
    const location = useLocation();

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
    };

    const getLinkClass = (path) => {
        if (path.startsWith('/#')) {
            const hash = path.substring(1);
            if (location.pathname === '/' && location.hash === hash) {
                return 'active';
            }
        } else {
            if (location.pathname === path) {
                return 'active';
            }
        }
        return '';
    };

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
                    <img src="/assets/images/EladaLogoV2.svg" alt="Elada Logo" />
                </Link>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link to="/" className={getLinkClass("/")}>{t("Home")}</Link>
                        </li>
                        <li>
                            <Link to="/#galerija" className={getLinkClass("/#galerija")}>{t("Gallery.title")}</Link>
                        </li>
                        <li>
                            <Link to="/#kontakt" className={getLinkClass("/#kontakt")}>{t("Contact")}</Link>
                        </li>
                        <li>
                            <Link to="/karta-pica" className={getLinkClass("/karta-pica")}>{t("Drinks.title")}</Link>
                        </li>
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