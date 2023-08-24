import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import './Timer.css';

const CountdownTimer = ({ deadline }) => {
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline));
  
    useEffect(() => {
      const timeInterval = setInterval(updateClock, 1000);
  
      function updateClock() {
        const t = getTimeRemaining(deadline);
        setTimeRemaining(t);
  
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
  
      return () => {
        clearInterval(timeInterval);
      };
    }, [deadline]);
  
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }
  
    function getZero(num) {
      return num >= 0 && num < 10 ? `0${num}` : num;
    }
  
    return (
      <div className="timer-box">
        <div className="text-head">
          <h2>Promotion time end</h2>
        </div>
        <div className="timer">
          <div className="timer_block">
            <span id="days">{getZero(timeRemaining.days)}</span>
            Days
          </div>
          <div className="timer_block">
            <span id="hours">{getZero(timeRemaining.hours)}</span>
            Hours
          </div>
          <div className="timer_block">
            <span id="minutes">{getZero(timeRemaining.minutes)}</span>
            Minutes
          </div>
          <div className="timer_block">
            <span id="seconds">{getZero(timeRemaining.seconds)}</span>
            Seconds
          </div>
        </div>
      </div>
    );
  };
  
  const Timer = () => {
    const deadline = '2023-10-10';
  
    return (
      <div>
        <Header />
        <CountdownTimer deadline={deadline} />
        <Footer />
      </div>
    );
  };
  
  export default Timer;
