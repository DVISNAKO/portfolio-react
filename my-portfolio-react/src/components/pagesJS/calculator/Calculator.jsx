import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import './Calculator.css';

const Calculator = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div class="main-block">
          <div>
            <h2>
              <span class="mult-text"></span>
            </h2>
          </div>
          <h3>Your Gender</h3>
          <div class="btn" id="gender">
            <button id="woman" class="active1">
              Woman
            </button>
            <button id="man">Man</button>
          </div>
          <div>
            <h3>Enter Your body info</h3>
          </div>
          <div class="btn">
            <input type="text" id="height" placeholder="height"></input>
            <input type="text" id="weight" placeholder="weight"></input>
            <input type="text" id="age" placeholder="age"></input>
          </div>
          <div>
            <h3>Select your activity</h3>
          </div>
          <div class="btn calculating">
            <button data-ratio="1.2" class="active1">
              low
            </button>
            <button data-ratio="1.375">small</button>
            <button data-ratio="1.55">normal</button>
            <button data-ratio="1.725">hight</button>
          </div>
          <span>============</span>
          <div>
            <h3>
              Your daily calories: <span class="result">2700</span>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calculator;
