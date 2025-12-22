import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";

import flagSr from "../assets/lang-flags/sr.svg";
import flagEn from "../assets/lang-flags/en.svg";
import flagGr from "../assets/lang-flags/gr.svg";

export default function Header() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();
    const location = useLocation();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 50);
            }
        }
    }, [location]);

    const getLinkClass = (path) => {
        if (path.includes("#")) {
            const [base, hash] = path.split("#");
            const currentHash = location.hash.replace("#", "");
            if (location.pathname === base && currentHash === hash) return "active";
        }
        if (location.pathname === path) return "active";
        return "";
    };

    return (
        <header id="header" className="custom-header sticky-top">
            <div className="container d-flex align-items-center justify-content-between">
                <Link to="/" className="logo">
                    <img src="/assets/images/EladaLogo.svg" alt="Caffe Elada Logo"
                        height="64px" width="144px" />
                </Link>
                <FontAwesomeIcon
                    icon={mobileMenuOpen ? faXmark : faBars}
                    className="custom-mobile-toggle d-lg-none"
                    onClick={toggleMobileMenu}
                />
                <nav className={`custom-navmenu ${mobileMenuOpen ? "open" : ""}`}>
                    <ul className="main-links">
                        <li>
                            <Link to="/" className={getLinkClass("/")} onClick={() => setMobileMenuOpen(false)}>
                                {t("Header.Home")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/#galerija" className={getLinkClass("/#galerija")} onClick={() => setMobileMenuOpen(false)}>
                                {t("Header.Gallery")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/#kontakt" className={getLinkClass("/#kontakt")} onClick={() => setMobileMenuOpen(false)}>
                                {t("Header.Contact")}
                            </Link>
                        </li>
                        <li>
                            <Link to="/karta-pica" className={getLinkClass("/karta-pica")} onClick={() => setMobileMenuOpen(false)}>
                                {t("Header.Drinks")}
                            </Link>
                        </li>
                    </ul>
                    <div className="language-container">
                        <NavDropdown
                            title={
                                <img
                                    src={language === "sr" ? flagSr : language === "gr" ? flagGr : flagEn}
                                    width="20"
                                    height="14"
                                    alt={t(`Header.${language}`)}
                                />
                            }
                            id="language-dropdown"
                            align="end"
                            className="language-dropdown"
                        >
                            <NavDropdown.Item onClick={() => changeLanguage("sr")}>
                                <img src={flagSr} width="20" height="14" alt={t("Header.sr")} />
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("gr")}>
                                <img src={flagGr} width="20" height="14" alt={t("Header.gr")} />
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage("en")}>
                                <img src={flagEn} width="20" height="14" alt={t("Header.en")} />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
}
