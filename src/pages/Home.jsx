import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faLocationDot, faCommentDots, faStar, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import GLightbox from 'glightbox';

export default function HomePage() {

    const { t } = useTranslation();

    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox',
        });

        return () => {
            if (lightbox && lightbox.destroy) {
                lightbox.destroy();
            }
        };
    }, []);

    return (
        <>
            <section id="hero" class="hero section light-background">
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="hero-content">
                        <div class="row align-items-center">
                            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                                <div class="content">
                                    <h1 class="hero-title mb-4">Caffe Elada</h1>
                                    <p class="hero-subtitle mb-4">
                                        <Trans i18nKey="HomePage.sectionText1"></Trans> <br></br><br></br>
                                        <Trans i18nKey="HomePage.sectionText2"></Trans>
                                    </p>
                                    <div class="hero-actions d-flex flex-wrap gap-3 mb-4">
                                        <a href="tel:+381641215566" rel="noopener noreferrer" class="btn btn-primary">
                                            {t('HomePage.bookTable')}
                                        </a>
                                        <Link to="/drinks" className="btn btn-outline">
                                            {t('HomePage.viewDrinks')}
                                        </Link>
                                    </div>
                                    <div class="hero-info d-flex flex-wrap align-items-center gap-4">
                                        <div class="info-item d-flex align-items-center">
                                            <i class="bi me-2">
                                                <FontAwesomeIcon icon={faClock} className="mx-2" title="Clock" />
                                            </i>
                                            <div>
                                                <small class="text-muted">{t('HomePage.openDaily')}</small>
                                                <div class="fw-medium">08:00 - 00:00</div>
                                            </div>
                                        </div>
                                        <a href="https://maps.app.goo.gl/1N3gb5m4EPXZM3iBA" target="_blank" rel="noopener noreferrer">
                                            <div class="info-item d-flex align-items-center">

                                                <i class="bi me-2">
                                                    <FontAwesomeIcon icon={faLocationDot} className="mx-2" title="Location Dot" />
                                                </i>
                                                <div>
                                                    <small class="text-muted">{t('HomePage.location')}</small>
                                                    <div class="fw-medium">
                                                        {t('ContactPage.addressDescription1')},&nbsp;
                                                        {t('ContactPage.addressDescription2')}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                                <div class="hero-images">
                                    <div class="main-image">
                                        <img src="/assets/images/elada-3.jpg" alt="Signature Mediterranean Dish" class="img-fluid" />
                                    </div>
                                    <div class="floating-images">
                                        <div class="floating-image floating-image-1">
                                            <img src="/assets/images/elada-1.jpg" alt="Grilled Seafood" class="img-fluid" />
                                        </div>
                                        <div class="floating-image floating-image-2">
                                            <img src="/assets/images/elada-4.jpg" alt="Mediterranean Dessert" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="full-width-image position-relative home-full-width-menu-wrapper min-vh-75 shadow"
                data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/images/elada-1.jpg" loading="lazy"
                    className="w-50 h-100 object-fit-cover" alt={t('HomePage.sectionImageAlt2')}
                />
                <img src="/assets/images/elada-4.jpg" loading="lazy"
                    className="w-50 h-100 object-fit-cover" alt={t('HomePage.sectionImageAlt3')}
                />
            </div>

            <section id="gallery" class="gallery section">
                <div class="container section-title" data-aos="fade-up">
                    <h2>{t('Gallery.title')}</h2>
                    <p>{t('Gallery.subTitle')}</p>
                </div>
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        {/*
                        <ul class="gallery-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-food">Food</li>
                            <li data-filter=".filter-interior">Interior</li>
                            <li data-filter=".filter-events">Events</li>
                            <li data-filter=".filter-staff">Staff</li>
                        </ul>
                        */}

                        <div class="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-4 col-md-6 gallery-item isotope-item filter-food">
                                <div class="gallery-wrap">
                                    <img src="/assets/images/elada-5.webp" class="img-fluid" alt="Appetizer Platter" loading="lazy" />
                                    <div class="gallery-info">
                                        <h4>Gourmet Appetizer Selection</h4>
                                        <p>Seasonal ingredients with artisan bread</p>
                                        <div class="gallery-links">
                                            <a href="/assets/images/elada-5.webp" class="glightbox" title="Gourmet Appetizer Selection" data-gallery="savora-gallery">
                                                <i class="bi">
                                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Magnifying Glass Plus" />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 gallery-item isotope-item filter-interior">
                                <div class="gallery-wrap">
                                    <img src="/assets/images/elada-6.webp" class="img-fluid" alt="Restaurant Interior" loading="lazy" />
                                    <div class="gallery-info">
                                        <h4>Main Dining Area</h4>
                                        <p>Elegant atmosphere with natural lighting</p>
                                        <div class="gallery-links">
                                            <a href="/assets/images/elada-6.webp" class="glightbox" title="Main Dining Area">
                                                <i class="bi">
                                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Magnifying Glass Plus" />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 gallery-item isotope-item filter-food">
                                <div class="gallery-wrap">
                                    <img src="/assets/images/elada-7.webp" class="img-fluid" alt="Main Course" loading="lazy" />
                                    <div class="gallery-info">
                                        <h4>Signature Main Course</h4>
                                        <p>Chef's special with seasonal vegetables</p>
                                        <div class="gallery-links">
                                            <a href="/assets/images/elada-7.webp" class="glightbox" title="Signature Main Course">
                                                <i class="bi">
                                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Magnifying Glass Plus" />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 gallery-item isotope-item filter-events">
                                <div class="gallery-wrap">
                                    <img src="/assets/images/elada-8.webp" class="img-fluid" alt="Special Event" loading="lazy" />
                                    <div class="gallery-info">
                                        <h4>Wine Tasting Evening</h4>
                                        <p>Monthly culinary experience with paired wines</p>
                                        <div class="gallery-links">
                                            <a href="/assets/images/elada-8.webp" class="glightbox" title="Wine Tasting Evening">
                                                <i class="bi">
                                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Magnifying Glass Plus" />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 gallery-item isotope-item filter-staff">
                                <div class="gallery-wrap">
                                    <img src="/assets/images/elada-9.webp" class="img-fluid" alt="Chef Portrait" loading="lazy" />
                                    <div class="gallery-info">
                                        <h4>Executive Chef</h4>
                                        <p>Creating culinary masterpieces since 2010</p>
                                        <div class="gallery-links">
                                            <a href="/assets/images/elada-9.webp" class="glightbox" title="Executive Chef">
                                                <i class="bi">
                                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Magnifying Glass Plus" />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 gallery-item isotope-item filter-interior">
                                <div class="gallery-wrap">
                                    <img src="/assets/images/elada-2.jpg" class="img-fluid" alt="Private Dining Room" loading="lazy" />
                                    <div class="gallery-info">
                                        <h4>Private Dining Space</h4>
                                        <p>Intimate setting for special occasions</p>
                                        <div class="gallery-links">
                                            <a href="/assets/images/elada-2.jpg" class="glightbox" title="Private Dining Space">
                                                <i class="bi">
                                                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Magnifying Glass Plus" />
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
