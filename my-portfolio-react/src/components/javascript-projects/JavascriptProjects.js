import React from 'react';
import './JavascriptProjects.css';
import {Link} from 'react-router-dom';

const JavascriptProjects = () => {
    return (
        <section>
            <div class="portfolio" id="portfolio">
                <h2 class="heading">JavaScript <span>Projects</span></h2>
                </div>

                <div class="portfolio-container">
                    <div class="portfolio-box">
                        <img src={require("./portfolio2.jpg")} alt="calculator"/>
                                <div class="portfolio-layer">
                                    <h4>Calculator</h4>
                                    <p>In this project, you can choose your gender, <br/>add your body information, and get your daily
                                        calories.</p>
                                    <Link to='calculator'><box-icon name='down-arrow' ></box-icon></Link>
                                </div>
                        </div>
                        <div class="portfolio-box">
                        <img src={require("./portfolio2.jpg")} alt="slider"/>
                                <div class="portfolio-layer">
                                    <h4>Slider</h4>
                                    <p>Classic slider, changing slide, side count and image</p>
                                    <Link to='slider'><box-icon name='down-arrow' ></box-icon></Link>
                                </div>
                        </div>
                        <div class="portfolio-box">
                        <img src={require("./portfolio2.jpg")} alt="timer"/>
                                <div class="portfolio-layer">
                                    <h4>Timer</h4>
                                    <p>Modul with timer, which can be used in four promotion</p>
                                    <a href="/pages/timer.html"><box-icon name='down-arrow' ></box-icon></a>
                                </div>
                        </div>
                        <div class="portfolio-box">
                        <img src={require("./portfolio2.jpg")} alt="tabs"/>
                                <div class="portfolio-layer">
                                    <h4>Tabs</h4>
                                    <p>Tabs module allow change content and description when you press Tab Button
                                        <br/> Tabs Button change to Active button after press</p>
                                    <a href="/pages/tabs.html"><box-icon name='down-arrow' ></box-icon></a>
                                </div>
                        </div>
                        <div class="portfolio-box">
                        <img src={require("./portfolio2.jpg")} alt="modal"/>
                                <div class="portfolio-layer">
                                    <h4>Modal window project</h4>
                                    <p>Open modal window after click on button or after timer</p>
                                    <a href="/Pages/modal.html"><box-icon name='down-arrow' ></box-icon></a>
                                </div>
                        </div>
                        <div class="portfolio-box">
                        <img src={require("./portfolio2.jpg")} alt="bootstrap"/>
                                <div class="portfolio-layer">
                                    <h4>Bootstrap 5</h4>
                                    <p>Responsive layout</p>
                                    <a href="/Pages/bootstrap.html"><box-icon name='down-arrow' ></box-icon></a>
                                </div>
                    </div>
                </div>
        </section>
    );
};

export default JavascriptProjects;