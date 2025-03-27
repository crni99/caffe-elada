import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
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
        <header>
            <Navbar expand="lg" className="shadow-sm mb-3 bg-body-tertiary">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <span>Caffe Elada</span>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Link to="/" className="nav-link">{t("Home")}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="#gallery" className="nav-link">{t("Gallery")}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="#contact" className="nav-link">{t("Contact")}</Link>
                            </Nav.Item>
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
                                id="language-dropdown"
                                align="end"
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
