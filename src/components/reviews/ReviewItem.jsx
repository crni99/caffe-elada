import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons';
import flagGr from "../../assets/lang-flags/gr.svg";

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
                    <p>
                        <span>{t(review.reviewKey)}</span>
                        &nbsp;
                        {review.featured &&
                            <img src={flagGr} width="30" height="24" alt="Flag of Greece"
                                class="flag-pulse-anim"></img>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;