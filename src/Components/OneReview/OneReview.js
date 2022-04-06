import React from 'react';
import './OneReview.css'

const OneReview = (props) => {
    const {name, comment, rating} = props.oneReview;
    return (
        <div className='card-one'>
            <h2>Name: {name}</h2>
            <p>Comment: {comment}</p>
            <h4>Rating: {rating}</h4>
        </div>
    );
};

export default OneReview;