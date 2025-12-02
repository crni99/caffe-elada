import React from 'react';

const FeatureGallery = () => {
    return (
        <section id="about" className="about section light-background">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="restaurant-gallery" data-aos="fade-up" data-aos-delay="400">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                            <div className="gallery-item">
                                <img src="/assets/images/elada-1.jpg" alt="Signature Dish" className="img-fluid rounded" />
                                <div className="gallery-caption">
                                    <h4>Title 1</h4>
                                    <p>Subtitle 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="gallery-item">
                                <img src="/assets/images/elada-4.jpg" alt="Wine Selection" className="img-fluid rounded" />
                                <div className="gallery-caption">
                                    <h4>Title 2</h4>
                                    <p>Subtitle 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureGallery;