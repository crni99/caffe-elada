import React, { useEffect } from 'react';
import GalleryItem from './GalleryItem';
import { useTranslation } from 'react-i18next';
import GLightbox from 'glightbox';

const galleryData = [
    { id: 1, image: '/assets/images/caffe-elada-ljig-enterijer-sank.webp' },
    { id: 2, image: '/assets/images/mythos-pivo-grcka-ponuda-elada.webp' },
    { id: 3, image: '/assets/images/valjevsko-pivo-tocene-kikiriki-elada.webp' },
    { id: 4, image: '/assets/images/koktel-tasos-vodka-espreso-elada.webp' },
    { id: 5, image: '/assets/images/atmosfera-ljudi-izlazak-elada-ljig.webp' },
    { id: 6, image: '/assets/images/alfa-pivo-galerija-sprat-elada.webp' },
];

const MainGallery = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        let lightbox = null;

        if (typeof window !== 'undefined' && window.GLightboxInstance && window.GLightboxInstance.destroy) {
            window.GLightboxInstance.destroy();
        }

        lightbox = GLightbox({
            selector: '.glightbox',
        });

        window.GLightboxInstance = lightbox;

        return () => {
            if (lightbox && lightbox.destroy) {
                lightbox.destroy();
                window.GLightboxInstance = null;
            }
        };
    }, [i18n.language]);


    const getTranslatedItem = (id) => {
        const i18nKey = `Gallery.Image${id}`;

        return {
            ...galleryData.find(item => item.id === id),
            title: t(`${i18nKey}.title`),
            subTitle: t(`${i18nKey}.subTitle`),
            alt: t(`${i18nKey}.alt`),
            i18nKey: i18nKey
        };
    };

    return (
        <section id="galerija" className="gallery section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Gallery.title')}</h2>
                <p>{t('Gallery.subTitle')}</p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                    {galleryData.map(item => (
                        <GalleryItem key={item.id} item={getTranslatedItem(item.id)} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MainGallery;