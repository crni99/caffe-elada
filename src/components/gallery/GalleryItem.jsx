import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../Icons/Icon';

const GalleryItem = ({ item }) => {

    const { t } = useTranslation();

    return (
        <div className="col-lg-4 col-sm-6 gallery-item" data-aos="fade-up">
            <div className="gallery-wrap">
                <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                />
                <div className="gallery-info">
                    <h3 className='h4'>{item.title}</h3>
                    {/* <p>{item.subTitle}</p> */}
                    <div className="gallery-links">
                        <a
                            href={item.image}
                            className="glightbox"
                            aria-label={`${item.title} - ${t('Gallery.view_enlarged')}`}
                            //title={item.title}
                            title={`${item.title} - ${item.subTitle}`}
                        >
                            <i className="bi">
                                <Icon icon="magnifying-glass-plus" className="mx-2" title="Prikaz Slike" />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(GalleryItem);