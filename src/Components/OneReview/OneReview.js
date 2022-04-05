import React from 'react';

const OneReview = (props) => {
    const {name, comment, rating} = props.oneReview;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Comment: {comment}</p>
            <h4>Rating: {rating}</h4>
        </div>
    );
};

export default OneReview;