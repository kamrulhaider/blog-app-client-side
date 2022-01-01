import React from 'react';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import SideBar from '../../SideBar/SideBar';
import './Home.css'

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className='home row'>
                <Posts />
                <SideBar />
            </div>
        </>
    );
};

export default Home;