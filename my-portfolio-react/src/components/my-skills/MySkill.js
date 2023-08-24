import React from 'react';
import './MySkill.css';

const MySkill = () => {
    return (
      <section className="about" id="about">
        <div className="about-img">
          <img src={require("../about-block/dim.jpg")} alt="myPhoto" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <ul>
            <li>Country: Latvia</li>
            <li>Age: 32</li>
            <li>Languages: Russian/Latvian/English</li>
            <li>Programming experience from: 01.04.2022</li>
            <li>Technologies I use: HTML/CSS/JavaScript/React/Git</li>
          </ul>
          <p id="think">
            <b>
              You can't know everything, <br />
              but if you can think, you can do anything.
            </b>
          </p>
          <a
            href="https://github.com/DVISNAKO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Read More
          </a>
        </div>
      </section>
    );
  };
  
export default MySkill;