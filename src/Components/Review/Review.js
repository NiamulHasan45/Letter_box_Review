import React from 'react';
import useReviews from '../../hooks/useReviews';
import OneReview from '../OneReview/OneReview';

const Review = () => {
    const [review, setReview] = useReviews();
    return (
        <div>
        <h2>Reviews</h2>
            {
        review.map(oneReview =><OneReview key={oneReview.id} oneReview={oneReview}></OneReview>)
      }
        </div>
    );
};

export default Review;