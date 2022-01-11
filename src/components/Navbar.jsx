import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to='/'>My  WatchList</Link>
                    </div>
 
                    <ul className="nav-links">
                        <li>
                           <Link to='/' className='btn'>Watch List</Link>
                        </li>

                        <li>
                           <Link to='/watchedmovie' className='btn'>Watched</Link>
                        </li>

                        <li>
                           <Link to='/addmovie' className="btn">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
