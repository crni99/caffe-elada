import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainTitle from '../components/MainTitle';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faLocationDot, faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons';


export default function HomePage() {

    const { t } = useTranslation();

    return (
        <>
            <MainTitle title={t('Home')} />

            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <h1 className="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1>
                            <hr className="divider" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                            <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>

            <div className='w-100 home-main-container d-flex justify-content-center align-items-center'>
                <img src="/assets/images/EladaLogoV2.svg"
                    className="w-100 rounded home-main-logo-image"
                    alt="Elada Logo"
                    data-aos="zoom-in" data-aos-duration="2000"
                />
            </div>

            <div className="container d-flex justify-content-center align-items-center home-section-container"
                data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-md-6 home-text text-white">
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

            <section id="testimonials" class="testimonials section light-background">
                <div class="container section-title" data-aos="fade-up">
                    <h2>{t('Reviews.title')}</h2>
                    <p>{t('Reviews.description')}</p>
                </div>
                <div class="container">
                    <div class="testimonial-grid">
                        <div class="testimonial-item" data-aos="zoom-in" data-aos-delay="100">
                            <div class="testimonial-card">
                                <div class="testimonial-header">
                                    <div class="testimonial-meta">
                                        <h3>Sandra L.</h3>
                                        <h4 className='star-reviews'>
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                        </h4>
                                        <div class="company-logo">
                                            <i class="bi bi-building"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-body">
                                    <i class="bi bi-chat-quote-fill quote-icon">
                                        <FontAwesomeIcon icon={faCommentDots} size="sm" className="mx-2" title="Comment Dots" />
                                    </i>
                                    <p>{t('Reviews.review2')}</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item featured" data-aos="zoom-in" data-aos-delay="200">
                            <div class="testimonial-card">
                                <div class="testimonial-header">
                                    <div class="testimonial-meta">
                                        <h3>Milica V.</h3>
                                        <h4 className='star-reviews'>
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                        </h4>
                                        <div class="company-logo">
                                            <i class="bi bi-buildings"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-body">
                                    <i class="bi bi-chat-quote-fill quote-icon">
                                        <FontAwesomeIcon icon={faCommentDots} size="sm" className="mx-2" title="Comment Dots" />
                                    </i>
                                    <p>{t('Reviews.review1')}</p><span className="flag-icon flag-icon-gr"></span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item" data-aos="zoom-in" data-aos-delay="300">
                            <div class="testimonial-card">
                                <div class="testimonial-header">
                                    <div class="testimonial-meta">
                                        <h3>Jana G.</h3>
                                        <h4 className='star-reviews'>
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                        </h4>
                                        <div class="company-logo">
                                            <i class="bi bi-building-check"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-body">
                                    <i class="bi bi-chat-quote-fill quote-icon">
                                        <FontAwesomeIcon icon={faCommentDots} size="sm" className="mx-2" title="Comment Dots" />
                                    </i>
                                    <p>{t('Reviews.review3')}</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item" data-aos="zoom-in" data-aos-delay="400">
                            <div class="testimonial-card">
                                <div class="testimonial-header">
                                    <div class="testimonial-meta">
                                        <h3>Stevan M.</h3>
                                        <h4 className='star-reviews'>
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                            <FontAwesomeIcon icon={faStar} className="mx-2" style={{ color: 'gold' }} title="Comment Dots" />
                                        </h4>
                                        <div class="company-logo">
                                            <i class="bi bi-building-gear"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-body">
                                    <i class="bi bi-chat-quote-fill quote-icon">
                                        <FontAwesomeIcon icon={faCommentDots} size="sm" className="mx-2" title="Comment Dots" />
                                    </i>
                                    <p>{t('Reviews.review4')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact section">
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

        </>
    );
}
