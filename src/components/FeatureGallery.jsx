import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const FeatureGallery = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className="about section light-background">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="restaurant-gallery" data-aos="fade-up" data-aos-delay="400">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                            <div className="gallery-item">
                                <img src="/assets/images/alfa-pivo-najbolji-grcki-mix.webp" width="192" height="192"
                                    alt={t('FeatureGallery.alt1')} className="img-fluid rounded" />
                                <div className="gallery-caption">
                                    <h4>{t('FeatureGallery.title1')}</h4>
                                    <p>{t('FeatureGallery.subTitle1')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="gallery-item">
                                <img src="/assets/images/najstarije-grcko-pivo-mamos-elada.webp" width="192" height="192"
                                    alt={t('FeatureGallery.alt2')} className="img-fluid rounded" />
                                <div className="gallery-caption">
                                    <h4>{t('FeatureGallery.title2')}</h4>
                                    <p>{t('FeatureGallery.subTitle2')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(FeatureGallery);