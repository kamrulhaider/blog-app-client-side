import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css'

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className='home row'>
                <h1 className="text-center fw-bold my-3">Blogs</h1>
                <p className="text-center">Keep the moment and the momentum of your life. share your ideas.</p>
                <Posts />
                <SideBar />
            </div>
        </>
    );
};

export default Home;