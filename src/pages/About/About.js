import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import bnr from '../../images/header-banner.jpg'

const About = () => {
    return (
        <>
         <img className="img-fluid" src={bnr} alt="" />
         <Container>
            <div>
                <p className="text-center my-5 fs-4 text-secondary">
                    Mission Statement - This describes the purpose of your business as it relates to the industry or market you serve.

                    Vision Statement - The future of your business is outlined in this section.

                    Values - Core values help the reader connect with you and your business on a personal level.

                    Target Market Summary - Your site visitors want to know that they're in the right place and that your company can help them.

                    Brief Company History - In addition to piquing the interest of your target market, a brief company history can help the press talk about your business accurately.
                </p>
            </div>
        </Container>
        <Footer></Footer>
        </>
        
    );
};

export default About;