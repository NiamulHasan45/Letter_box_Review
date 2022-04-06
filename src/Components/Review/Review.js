import React from 'react';
import useReviews from '../../hooks/useReviews';
import OneReview from '../OneReview/OneReview';
import './Review.css'

const Review = () => {
    const [review, setReview] = useReviews();
    return (
        <div>
            <h2>Reviews</h2>
            <div className='card'>
                {
                    review.map(oneReview => <OneReview key={oneReview.id} oneReview={oneReview}></OneReview>)
                }
            </div>
        </div>
    );
};

export default Review;