import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import './Calculator.css';

const Calculator = () => {
  const [sex, setSex] = useState(localStorage.getItem('sex') || 'woman');
  const [ratio, setRatio] = useState(localStorage.getItem('ratio') || 1.375);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [calories, setCalories] = useState('');

  const handleGenderClick = (gender) => {
    setSex(gender);
    localStorage.setItem('sex', gender);
    calcTotal();
  };

  const handleRatioClick = (newRatio) => {
    setRatio(newRatio);
    localStorage.setItem('ratio', newRatio);
    calcTotal();
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      if (field === 'height') setHeight(value);
      else if (field === 'weight') setWeight(value);
      else if (field === 'age') setAge(value);
      calcTotal();
    }
  };

  const calcTotal = () => {
    if (!sex || !height || !weight || !age || !ratio) {
      setCalories('_____');
      return;
    }

    if (sex === 'woman') {
      setCalories(
        Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio)
      );
    } else {
      setCalories(
        Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio)
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="main-block">
          <div>
            <h2>
              <span className="mult-text"></span>
            </h2>
          </div>
          <h3>Your Gender</h3>
          <div className="btn" id="gender">
            <button
              id="woman"
              className={sex === 'woman' ? 'active1' : ''}
              onClick={() => handleGenderClick('woman')}
            >
              Woman
            </button>
            <button
              id="man"
              className={sex === 'man' ? 'active1' : ''}
              onClick={() => handleGenderClick('man')}
            >
              Man
            </button>
          </div>
          <div>
            <h3>Enter Your body info</h3>
          </div>
          <div className="btn">
            <input
              type="text"
              id="height"
              placeholder="height"
              value={height}
              onChange={(e) => handleInputChange(e, 'height')}
            />
            <input
              type="text"
              id="weight"
              placeholder="weight"
              value={weight}
              onChange={(e) => handleInputChange(e, 'weight')}
            />
            <input
              type="text"
              id="age"
              placeholder="age"
              value={age}
              onChange={(e) => handleInputChange(e, 'age')}
            />
          </div>
          <div>
            <h3>Select your activity</h3>
          </div>
          <div className="btn calculating">
            <button
              data-ratio="1.2"
              className={ratio === 1.2 ? 'active1' : ''}
              onClick={() => handleRatioClick(1.2)}
            >
              low
            </button>
            <button
              data-ratio="1.375"
              className={ratio === 1.375 ? 'active1' : ''}
              onClick={() => handleRatioClick(1.375)}
            >
              small
            </button>
            <button
              data-ratio="1.55"
              className={ratio === 1.55 ? 'active1' : ''}
              onClick={() => handleRatioClick(1.55)}
            >
              normal
            </button>
            <button
              data-ratio="1.725"
              className={ratio === 1.725 ? 'active1' : ''}
              onClick={() => handleRatioClick(1.725)}
            >
              high
            </button>
          </div>
          <span>============</span>
          <div>
            <h3>
              Your daily calories: <span className="result">{calories}</span>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calculator;
