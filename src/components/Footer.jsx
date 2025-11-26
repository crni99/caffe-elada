import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faStar, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Footer() {

    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            <footer id="footer" className="footer light-background">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <Link to="/" className="logo d-flex align-items-center mb-4">
                                    <span className="sitename">Caffe Elada</span>
                                </Link>
                                <p className="mb-4">
                                    {t('Footer.description1')}<br></br>
                                    {t('Footer.description2')}
                                </p>
                                <div className="newsletter-form">
                                    <h5>{t('Footer.subTitle1')}</h5>
                                    <a
                                        href="https://search.google.com/local/writereview?placeid=ChIJBRB_pSXjWUcRsbf9En3Vi8s"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-review-split"
                                    >
                                        <span className="btn-main-text">
                                            <strong>
                                                {t('Footer.placeholder1')}
                                            </strong>
                                        </span>
                                        <span className="btn-icon-part" data-aos="fade-up" data-aos-duration="2000">
                                            <FontAwesomeIcon icon={faStar} className="icon-animate" size='lg'/>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-lg-center">
                            <div className="footer-links">
                                <h4>{t("Footer.subTitle2")}</h4>
                                <ul>
                                    <li>
                                        <Link to="/karta-pica" className=''>
                                            <FontAwesomeIcon icon={faChevronRight} className="mx-2 icon-blue" title="Chevron Right" />
                                            {t("Drinks.title")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#galerija">
                                            <FontAwesomeIcon icon={faChevronRight} className="mx-2 icon-blue" title="Chevron Right" />
                                            {t("Gallery.title")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#kontakt">
                                            <FontAwesomeIcon icon={faChevronRight} className="mx-2 icon-blue" title="Chevron Right" />
                                            {t("Contact")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-contact">
                                <h4>{t('Footer.subTitle3')}</h4>
                                <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                    <div className="contact-item">

                                        <div className="contact-icon">
                                            <i className="bi">
                                                <FontAwesomeIcon icon={faLocationDot} className="mx-2" title="Location Dot" />
                                            </i>
                                        </div>
                                        <div className="contact-info">
                                            <p>{t('ContactPage.addressDescription1')}<br />{t('ContactPage.addressDescription2')}</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="tel:+381641215566" rel="noopener noreferrer">
                                    <div className="contact-item">
                                        <div className="contact-icon">
                                            <i className="bi">
                                                <FontAwesomeIcon icon={faPhone} className="mx-2" title="Phone" />
                                            </i>
                                        </div>
                                        <div className="contact-info">
                                            <p>+381 64 121-5566</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/profile.php?id=61565711781481" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="mx-2" title="Facebook" />
                                    </a>
                                    <a href="https://www.instagram.com/caffe_elada/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagramSquare} size="lg" className="mx-2" title="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="copyright">
                                    <p>{currentYear} &copy;<strong className="px-1 sitename">Caffe Elada</strong><span>{t('Footer.allRightsReserved')}</span></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/*
                                <div className="footer-bottom-links">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                    <a href="#">Cookie Policy</a>
                                </div>
                                */}
                                <div className="credits">
                                    {t('Footer.designedBy')}&nbsp;
                                    <a href="https://www.linkedin.com/in/ognj3n/" target="_blank" rel="noopener noreferrer">
                                        <strong>Ognjen</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
            <a href="#root" id="scroll-top"
                className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
                onClick={scrollToTop}>
                <i className="bi">
                    <FontAwesomeIcon icon={faChevronUp} className="mx-2 icon-white" title="Chevron Up" />
                </i>
            </a>
        </>
    );
}
