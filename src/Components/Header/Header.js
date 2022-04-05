import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link className='text-link' to="/">Home</Link>
                <Link className='text-link' to="/dashboard">Dashboard</Link>
                <Link className='text-link' to='/review'>Reviews</Link>
                <Link className='text-link' to="/blogs">Blogs</Link>

            </nav>
        </div>
    );
};

export default Header;