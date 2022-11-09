import React from 'react';
import Services from '../../Services/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;