// import React from 'react';
import './TopBar.css'

const TopBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <i className="topIcon fab fa-facebook-square"></i>
                        <i className="topIcon fab fa-twitter-square"></i>
                        <i className="topIcon fab fa-pinterest-square"></i>
                        <i className="topIcon fab fa-instagram-square"></i>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav d-flex justify-content-center mb-2 mb-lg-0 w-100">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">WRITE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">LOGOUT</a>
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