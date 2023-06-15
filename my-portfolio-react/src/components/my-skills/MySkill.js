import React from 'react';
import './MySkill.css';

const MySkill = () => {
    return (
        
            <section class="about" id="about">
                <div class="about-img">
                    <img src={require("../about-block/dim.jpg")} alt="myPhoto"/>
                </div>
                <div class="about-content">
                    <h2 class="heading">About <span>Me</span></h2>
                    <h3>Frontend Developer!</h3>
                    <p>
                        <ul>
                            <li>Contry: Latvia</li>
                            <li>Age: 32</li>
                            <li>Languages: Russian/Latvian/English</li>
                            <li>Programming experience from: 01.04.2022</li>
                            <li>Tehnologies what I use: HTML/CSS/JavaScript/React</li>
                            <p id="think"><b>You can't know everything, <br/>but if you can think, you can do anything.</b></p>
                        </ul>
                    </p>
                    <a href="https://github.com/DVISNAKO" target="_blank" class="btn">Read More</a>
                    
                </div>

            </section>
    
    )
}

export default MySkill;