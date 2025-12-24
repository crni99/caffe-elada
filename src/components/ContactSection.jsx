import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icons/Icon';

const ContactSection = () => {

    const { t } = useTranslation();

    return (
        <section id="kontakt" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Contact.title')}</h2>
                <p>{t('Contact.description')}</p>
            </div>
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    <div className="col-lg-5">
                        <div className="contact-info">
                            <div className="contact-card">
                                <h3>{t('Contact.subTitle')}</h3>
                                <p>{t('Contact.subDescription')}</p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <i className="bi">
                                            <Icon icon="clock" size="sm" className="mx-2" title="Clock" />
                                        </i>
                                        <div>
                                            <h4>{t('Contact.openingHoursTitle')}</h4>
                                            <p>{t('Contact.openingHoursDescription1')}</p>
                                            <p>{t('Contact.openingHoursDescription2')}</p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="bi">
                                            <a href="tel:+381641215566" rel="noopener noreferrer">
                                                <Icon icon="phone" size="sm" className="mx-2" title="Phone" />
                                            </a>
                                        </i>
                                        <div>
                                            <a href="tel:+381641215566" rel="noopener noreferrer">
                                                <h4>{t('Contact.phoneTitle')}</h4>
                                                <p className='font-weight-bold'>
                                                    +381 64 121-5566
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <i className="bi">
                                            <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                                <Icon icon="location-dot" size="sm" className="mx-2" title="Location Dot" />
                                            </a>
                                        </i>
                                        <div>
                                            <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                                <h4>{t('Contact.addressTitle')}</h4>
                                                <p>{t('Contact.addressDescription1')}</p>
                                                <p>{t('Contact.addressDescription2')}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/profile.php?id=61565711781481" target="_blank" rel="noopener noreferrer"
                                        aria-label={t('Contact.IconAlt.facebook')}>
                                        <Icon icon={['fab', 'facebook-square']} className="mx-2" title={t('Contact.IconAlt.facebook')} />
                                    </a>
                                    <a href="https://www.instagram.com/caffe_elada/" target="_blank" rel="noopener noreferrer"
                                        aria-label={t('Contact.IconAlt.instagram')}>
                                        <Icon icon={['fab', 'instagram-square']} className="mx-2" title={t('Contact.IconAlt.instagram')} />
                                    </a>
                                    <a href="tel:+381641215566" rel="noopener noreferrer"
                                        aria-label={t('Contact.IconAlt.call')}>
                                        <Icon icon="phone" className="mx-2" title={t('Contact.IconAlt.call')} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form-wrapper map-container-height-fix">
                            <iframe
                                src={t('Contact.googleMap')}
                                width="100%"
                                height="100%"
                                className='contact-map'
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={t('Contact.mapTitle')}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;