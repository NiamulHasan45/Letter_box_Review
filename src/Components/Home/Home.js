import React from 'react';
import useReviews from '../../hooks/useReviews';
import letterbox from '../../images/letterbox.png'
import OneReview from '../OneReview/OneReview';
import './Home.css'

const Home = () => {
    const [review, setReview] = useReviews();
    return (
        <div>
            <div className='container'>
                <div>
                    <h1>Letter, an emotion of our ancestors.</h1>
                    <p>
                        The main purposes of letters were to send information, news and greetings. For some, letters were a way to practice critical reading, self-expressive writing, polemical writing and also exchange ideas with like-minded others.
                    </p>
                </div>
                <div className='lady-letter'>
                    <img src={letterbox} alt="" />
                </div>
            </div>
            <div>
                <h2>Reviews</h2>
            </div>
            <div className='card'>
                {
                    review.map(oneReview => <OneReview key={oneReview.id} oneReview={oneReview}></OneReview>)
                }
            </div>
        </div>

    );
};

export default Home;