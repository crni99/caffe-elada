import React, { useEffect, useMemo, useRef } from 'react';
import GalleryItem from './GalleryItem';
import { useTranslation } from 'react-i18next';

const galleryData = [
    { id: 1, image: '/assets/images/caffe-elada-ljig-enterijer-sank-v2.webp' },
    { id: 2, image: '/assets/images/mythos-pivo-grcka-ponuda-elada-v2.webp' },
    { id: 3, image: '/assets/images/valjevsko-pivo-tocene-kikiriki-elada-v2.webp' },
    { id: 4, image: '/assets/images/koktel-tasos-vodka-espreso-elada-v2.webp' },
    { id: 5, image: '/assets/images/atmosfera-ljudi-izlazak-elada-ljig-v2.webp' },
    { id: 6, image: '/assets/images/alfa-pivo-galerija-sprat-elada-v2.webp' },
];

const MainGallery = () => {
    const { t, i18n } = useTranslation();
    const lightboxRef = useRef(null);

    const translatedGallery = useMemo(() => {
        return galleryData.map(item => ({
            ...item,
            title: t(`Gallery.Image${item.id}.title`),
            subTitle: t(`Gallery.Image${item.id}.subTitle`),
            alt: t(`Gallery.Image${item.id}.alt`),
        }));
    }, [t]);

    useEffect(() => {
        let mounted = true;

        const initLightbox = async () => {
            const { default: GLightbox } = await import('glightbox');

            if (!mounted) return;

            if (lightboxRef.current) {
                lightboxRef.current.destroy();
            }

            lightboxRef.current = GLightbox({
                selector: '.glightbox',
                touchNavigation: true,
                loop: true,
            });
        };

        initLightbox();

        return () => {
            mounted = false;
            lightboxRef.current?.destroy();
            lightboxRef.current = null;
        };
    }, [i18n.language]);

    return (
        <section id="galerija" className="gallery section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Gallery.title')}</h2>
                <p>{t('Gallery.subTitle')}</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 isotope-container">
                    {translatedGallery.map(item => (
                        <GalleryItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainGallery;
