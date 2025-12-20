import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import flagGr from "../assets/lang-flags/gr.svg";

const HeroSection = () => {

    const { t } = useTranslation();

    return (
        <section id="hero" className="hero section light-background">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="hero-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                            <div className="content">
                                <h1 className="hero-title mb-4">Caffe Elada</h1>
                                <p className="hero-subtitle mb-4">
                                    {t('Hero.sectionText1')} <br />
                                    {t('Hero.sectionText2')} <br />
                                    {t('Hero.sectionText3')} <br />
                                    {t('Hero.sectionText4')} <br />
                                    {t('Hero.sectionText5')} &nbsp;
                                    <img src={flagGr} width="30" height="24" alt="Flag of Greece"
                                        className="hero-gr-flag"></img>
                                </p>
                                <div className="hero-actions d-flex flex-wrap gap-3 mb-4">
                                    <a href="tel:+381641215566" rel="noopener noreferrer" className="btn btn-primary">
                                        {t('Hero.bookTable')}
                                    </a>
                                    <Link to="/karta-pica" className="btn btn-outline">
                                        {t('Hero.viewDrinks')}
                                    </Link>
                                </div>
                                <div className="hero-info d-flex flex-wrap align-items-center gap-4">
                                    <div className="info-item d-flex align-items-center">
                                        <i className="bi me-2">
                                            <FontAwesomeIcon icon={faClock} className="mx-2" title="Clock" />
                                        </i>
                                        <div>
                                            <small className="text-muted">{t('Hero.openDaily')}</small>
                                            <div className="fw-medium">08:00 - 00:00</div>
                                        </div>
                                    </div>
                                    <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                        <div className="info-item d-flex align-items-center">
                                            <i className="bi me-2">
                                                <FontAwesomeIcon icon={faLocationDot} className="mx-2" title="Location Dot" />
                                            </i>
                                            <div>
                                                <small className="text-muted">{t('Hero.location')}</small>
                                                <div className="fw-medium">
                                                    {t('Contact.addressDescription1')},&nbsp;
                                                    {t('Contact.addressDescription2')}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                            <div className="hero-images">
                                <div className="main-image">
                                    <img src="/assets/images/elada-3.jpg" alt={t('Hero.ImageAlt.mainImage')} className="img-fluid"
                                        width="192" height="192" />
                                </div>
                                <div className="floating-images">
                                    <div className="floating-image floating-image-1">
                                        <img src="/assets/images/elada-1.jpg" alt={t('Hero.ImageAlt.floatingImage1')} className="img-fluid"
                                            width="192" height="192" />
                                    </div>
                                    <div className="floating-image floating-image-2">
                                        <img src="/assets/images/elada-4.jpg" alt={t('Hero.ImageAlt.floatingImage2')} className="img-fluid"
                                            width="192" height="192" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;