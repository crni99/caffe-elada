import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const GalleryItem = ({ item }) => {
    return (
        <div className="col-lg-4 col-md-6 gallery-item" data-aos="fade-up">
            <div className="gallery-wrap">
                <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.alt}
                    loading="lazy"
                />
                <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.subTitle}</p>
                    <div className="gallery-links">
                        <a
                            href={item.image}
                            className="glightbox"
                            title={`${item.title} - ${item.subTitle}`}
                        >
                            <i className="bi">
                                <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="mx-2" title="Prikaz Slike" />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;