import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainTitle from '../components/MainTitle';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {

    const { t } = useTranslation();

    return (
        <>
            <MainTitle title={t('Home')} />

            <div className='w-100 home-main-container d-flex justify-content-center align-items-center'>
                <img src="/assets/images/EladaLogoV2.svg"
                    className="w-100 rounded home-main-logo-image"
                    alt="Elada Logo"
                    data-aos="zoom-in" data-aos-duration="2000"
                />
            </div>

            <div className="container d-flex justify-content-center align-items-center min-vh-75 home-section-container"
                data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="row-wrapper col-md-6 home-text">
                        <h3 className="home-section-title text-center">
                            <Trans i18nKey="HomePage.sectionTitle"></Trans>
                        </h3>
                        <p className='mt4'>
                            <Trans i18nKey="HomePage.sectionText1"></Trans>
                        </p>
                        <p className='mt-4'>
                            <Trans i18nKey="HomePage.sectionText2"></Trans>
                        </p>
                        <p className='mt-4'>
                            <Trans i18nKey="HomePage.sectionText3"></Trans>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/images/elada-3.jpg"
                            className="w-100 rounded mb-4 home-main-image"
                            alt={t('HomePage.sectionImageAlt1')} />
                    </div>
                </div>
            </div>

            <div className="full-width-image position-relative home-full-width-menu-wrapper min-vh-75 shadow"
                data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/images/elada-1.jpg" loading="lazy"
                    className="w-50 h-100 object-fit-cover" alt={t('HomePage.sectionImageAlt2')}
                />
                <img src="/assets/images/elada-4.jpg" loading="lazy"
                    className="w-50 h-100 object-fit-cover" alt={t('HomePage.sectionImageAlt3')}
                />
            </div>

            <div id="gallery"></div>
            <div className="container d-flex justify-content-center 
                align-items-center min-vh-66 mt-7"
                data-aos="fade-up" data-aos-duration="2000" >
                <div className="row w-100">
                    <div className="col-md-3">&nbsp;</div>
                    <div className="col-md-6">
                        <Carousel interval="3000" className='rounded'>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/elada-5.webp"
                                    alt="Instagram Post 1"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/elada-6.webp"
                                    alt="Instagram Post 2"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/elada-7.webp"
                                    alt="Instagram Post 3"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/elada-8.webp"
                                    alt="Instagram Post 4"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/elada-9.webp"
                                    alt="Instagram Post 4"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/assets/images/elada-2.jpg"
                                    alt="Instagram Post 4"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-3">&nbsp;</div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center container-full-view min-vh-66 contact-container"
                data-aos="fade-up" data-aos-duration="2000"
            >
                <div className="row w-100 row-wrapper">
                    <div className="col-md-4 mt-3 mb-4">
                        <h3 className='text-uppercase fw-bold mb-4'>{t('ContactPage.subTitle')}</h3>
                        <div className=''>
                            <p className="mt-5">
                                <FontAwesomeIcon icon={faClock} size="xl" className="mx-2 custom-icon" title="Time" />
                                08:00 - 00:00
                            </p>
                            <p className="mt-5">
                                <a href="tel:+381641215566" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPhone} size="xl" className="mx-2 custom-icon" title="Phone" />
                                    {t('ContactPage.Phone')}
                                </a>
                            </p>
                            <p className="mt-5">
                                <a href="https://www.instagram.com/caffe_elada/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagramSquare} size="xl" className="mx-2 custom-icon" title="Instagram" />
                                    {t('ContactPage.Instagram')}
                                </a>
                            </p>
                            <p className="mt-5">
                                <a href="https://www.facebook.com/profile.php?id=61565711781481" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookSquare} size="xl" className="mx-2 custom-icon" title="Facebook" />
                                    {t('ContactPage.Facebook')}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end mt-3" id='contact'>
                        <iframe
                            src={t('ContactPage.GoogleMap')}
                            width="100%"
                            height="500"
                            className='contact-map'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title='Google Map'>
                        </iframe>
                    </div>
                </div>
            </div>

        </>
    );
}
