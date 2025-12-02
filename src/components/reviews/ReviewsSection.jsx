import React from 'react';
import ReviewItem from './ReviewItem';
import { useTranslation } from 'react-i18next';

const reviewsData = [
    {
        id: 1,
        name: 'Sandra L.',
        reviewKey: 'Reviews.review1',
        delay: '100',
        featured: false,
    },
    {
        id: 2,
        name: 'Milica V.',
        reviewKey: 'Reviews.review2',
        delay: '200',
        featured: true,
    },
    {
        id: 3,
        name: 'Jana G.',
        reviewKey: 'Reviews.review3',
        delay: '300',
        featured: false,
    },
    {
        id: 4,
        name: 'Stevan M.',
        reviewKey: 'Reviews.review4',
        delay: '400',
        featured: false,
    },
];

const ReviewsSection = () => {
    const { t } = useTranslation();

    return (
        <section id="reviews" className="testimonials section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Reviews.title')}</h2>
                <p>{t('Reviews.description')}</p>
            </div>
            <div className="container">
                <div className="testimonial-grid">
                    {reviewsData.map(review => (
                        <ReviewItem key={review.id} review={review} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReviewsSection;