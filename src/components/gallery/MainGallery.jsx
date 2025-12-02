import React, { useEffect } from 'react';
import GalleryItem from './GalleryItem';
import { useTranslation } from 'react-i18next';
import GLightbox from 'glightbox';

const galleryData = [
    {
        id: 1,
        title: 'Title 1',
        subTitle: 'Subtitle 1',
        image: '/assets/images/elada-5.webp',
    },
    {
        id: 2,
        title: 'Title 2',
        subTitle: 'Subtitle 2',
        image: '/assets/images/elada-6.webp',
    },
    {
        id: 3,
        title: 'Title 3',
        subTitle: 'Subtitle 3',
        image: '/assets/images/elada-7.webp',
    },
    {
        id: 4,
        title: 'Title 4',
        subTitle: 'Subtitle 4',
        image: '/assets/images/elada-8.webp',
    },
    {
        id: 5,
        title: 'Title 5',
        subTitle: 'Subtitle 5',
        image: '/assets/images/elada-9.webp',
    },
    {
        id: 6,
        title: 'Title 6',
        subTitle: 'Subtitle 6',
        image: '/assets/images/elada-2.jpg',
    },
];

const MainGallery = () => {

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
        <section id="galerija" className="gallery section">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Gallery.title')}</h2>
                <p>{t('Gallery.subTitle')}</p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                    {galleryData.map(item => (
                        <GalleryItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MainGallery;