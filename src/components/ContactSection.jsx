import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {

    const { t } = useTranslation();

    return (
        <section id="kontakt" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Contact')}</h2>
                <p>{t('ContactPage.description')}</p>
            </div>
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-5">
                        <div className="contact-info">
                            <div className="contact-card">
                                <h3>{t('ContactPage.subTitle')}</h3>
                                <p>{t('ContactPage.subDescription')}</p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <i className="bi">
                                            <FontAwesomeIcon icon={faClock} size="sm" className="mx-2" title="Clock" />
                                        </i>
                                        <div>
                                            <h4>{t('ContactPage.openingHoursTitle')}</h4>
                                            <p>{t('ContactPage.openingHoursDescription1')}</p>
                                            <p>{t('ContactPage.openingHoursDescription2')}</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="bi">
                                            <a href="tel:+381641215566" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faPhone} size="sm" className="mx-2" title="Phone" />
                                            </a>
                                        </i>
                                        <div>
                                            <a href="tel:+381641215566" rel="noopener noreferrer">
                                                <h4>{t('ContactPage.phoneTitle')}</h4>
                                                <p className='font-weight-bold'>
                                                    +381 64 121-5566
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="bi">
                                            <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faLocationDot} size="sm" className="mx-2" title="Location Dot" />
                                            </a>
                                        </i>
                                        <div>
                                            <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                                <h4>{t('ContactPage.addressTitle')}</h4>
                                                <p>{t('ContactPage.addressDescription1')}</p>
                                                <p>{t('ContactPage.addressDescription2')}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/profile.php?id=61565711781481" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookSquare} className="mx-2" title="Facebook" />
                                    </a>
                                    <a href="https://www.instagram.com/caffe_elada/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagramSquare} className="mx-2" title="Instagram" />
                                    </a>
                                    <a href="tel:+381641215566" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faPhone} className="mx-2" title="Phone" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form-wrapper map-container-height-fix">
                            <iframe
                                src={t('ContactPage.googleMap')}
                                width="100%"
                                height="100%"
                                className='contact-map'
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title='Google Map'>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;