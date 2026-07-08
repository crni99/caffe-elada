import ReviewItem from './ReviewItem';
import { reviewsData } from './reviewsData';
import { useTranslation } from 'react-i18next';

const ReviewsSection = () => {
    const { t } = useTranslation();

    return (
        <section id="recenzije" className="testimonials section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>{t('Reviews.title')}</h2>
                <p>{t('Reviews.description')}</p>
            </div>
            <div className="container">
                <div className="testimonial-grid">
                    {reviewsData.map(review => (
                        <ReviewItem key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ReviewsSection;