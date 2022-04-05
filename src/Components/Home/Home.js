import React from 'react';
import letterbox from '../../images/letterbox.png'
import './Home.css'

const Home = () => {
    return (
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
    );
};

export default Home;