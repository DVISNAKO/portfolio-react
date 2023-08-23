import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Header/>
            <div className='slider'></div>
            <Footer/>
        </div>
    );
};

export default Slider;