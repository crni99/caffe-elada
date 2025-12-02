import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = () => {
    const stars = Array(5).fill(faStar);

    return (
        <h4 className='star-reviews'>
            {stars.map((starIcon, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={starIcon}
                    className="mx-2"
                    style={{ color: 'gold' }}
                    title="Star Rating"
                />
            ))}
        </h4>
    );
};

const ReviewItem = ({ review, t }) => {
    const itemClassName = `testimonial-item${review.featured ? ' featured' : ''}`;

    return (
        <div
            className={itemClassName}
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
                        <FontAwesomeIcon icon={faCommentDots} size="sm" className="mx-2" title="Comment Dots" />
                    </i>
                    <p>{t(review.reviewKey)}</p>
                    {review.featured && <span className="flag-icon flag-icon-gr"></span>}
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;