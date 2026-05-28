import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../Icons/Icon';
import flagGr from "../../assets/lang-flags/gr.svg";

const StarRating = () => (
    <h4 className="star-reviews">
        {Array.from({ length: 5 }).map((_, index) => (
            <Icon
                key={index}
                icon="star"
                className="mx-2"
                style={{ color: 'gold' }}
                title="Star Rating"
            />
        ))}
    </h4>
);

const ReviewItem = ({ review }) => {
    
    const { t } = useTranslation();

    return (
        <div
            className={`testimonial-item${review.featured ? ' featured' : ''}`}
            data-aos="zoom-in"
            data-aos-delay={review.delay}
        >
            <div className="testimonial-card">
                <div className="testimonial-header">
                    <div className="testimonial-meta">
                        <h3>{review.name}</h3>
                        <StarRating />
                    </div>
                </div>
                <div className="testimonial-body">
                    <i className="bi bi-chat-quote-fill quote-icon">
                        <Icon icon="comment-dots" size="sm" className="mx-2" title="Comment Dots" />
                    </i>
                    <p>
                        <span>{t(review.reviewKey)}</span>
                        &nbsp;
                        {review.featured &&
                            <img src={flagGr} width="30" height="24" alt="Flag of Greece"
                                className="flag-pulse-anim" />
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(ReviewItem);