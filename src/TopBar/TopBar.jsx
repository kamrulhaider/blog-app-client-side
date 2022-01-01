// import React from 'react';
import './TopBar.css'

const TopBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="topIcon fab fa-facebook-square"></i>
                        <i className="topIcon fab fa-twitter-square"></i>
                        <i className="topIcon fab fa-pinterest-square"></i>
                        <i className="topIcon fab fa-instagram-square"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-center mb-2 mb-lg-0 w-100">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">WRITE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">LOGOUT</a>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-center ms-auto align-items-center'>
                            <img className='topImg' src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" alt="" />
                            <i className="topSearchIcon fas fa-search fs-4 text-secondary ms-3"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TopBar;