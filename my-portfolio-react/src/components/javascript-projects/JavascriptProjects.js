import React from "react";
import "./JavascriptProjects.css";
import { Link } from "react-router-dom";

const JavascriptProjects = () => {
  return (
    <section>
      <div className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Projects</span>
        </h2>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={require("./calculator.png")} alt="calculator" />
          <div className="portfolio-layer">
            <h4>Calculator</h4>
            <p>
              In this project, you can choose your gender, <br />
              add your body information, and get your daily calories.
            </p>
            <Link to="calculator">
              <box-icon name="down-arrow"></box-icon>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={require("./slider.png")} alt="slider" />
          <div className="portfolio-layer">
            <h4>Slider</h4>
            <p>Classic slider, changing slide, side count and image</p>
            <Link to="slider">
              <box-icon name="down-arrow"></box-icon>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={require("./timer.png")} alt="timer" />
          <div className="portfolio-layer">
            <h4>Timer</h4>
            <p>Modul with timer, which can be used in four promotion</p>
            <Link to="timer">
              <box-icon name="down-arrow"></box-icon>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={require("./todo.png")} alt="todo" />
          <div className="portfolio-layer">
            <h4>ToDo</h4>
            <p>
              Functionality: create new Task, checkbox what task is done, delete
              task
            </p>
            <Link to="todo">
              <box-icon name="down-arrow"></box-icon>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={require("./modal.png")} alt="modal" />
          <div className="portfolio-layer">
            <h4>Modal window project</h4>
            <p>Open modal window after click on button or after timer</p>
            <Link to="modal">
              <box-icon name="down-arrow"></box-icon>
            </Link>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={require("./salaryApp.png")} alt="salaryApp" />
          <div className="portfolio-layer">
            <h4>SalaryApp</h4>
            <p>Responsive layout</p>
            <Link to="salaryApp">
              <box-icon name="down-arrow"></box-icon>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavascriptProjects;
