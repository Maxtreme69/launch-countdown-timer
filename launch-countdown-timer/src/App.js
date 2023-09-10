import React, { useEffect, useState } from 'react';
import './App.css';
import PatternHills from './img/pattern-hills.svg';
import FaceBookIcon from './img/icon-facebook.svg'; 
import PinterestIcon from './img/icon-pinterest.svg';
import InstagramIcon from './img/icon-instagram.svg';

function formatNumberWithLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

function App() {
  const [countdown, setCountdown] = useState({
    days: 24,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to update the countdown values
  const updateCountdown = () => {
    setInterval(() => {
      const now = new Date().getTime();
      const launchDate = new Date('2023-10-04 00:00:00').getTime(); // Set your launch date here
      const distance = launchDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: formatNumberWithLeadingZero(days),
          hours: formatNumberWithLeadingZero(hours),
          minutes: formatNumberWithLeadingZero(minutes),
          seconds: formatNumberWithLeadingZero(seconds),
        });
      }
    }, 1000);
  };

  useEffect(() => {
    updateCountdown();
  }, []);

  return (
    <div className="App">
      <div className="pattern-hills">
        <img src={PatternHills} alt="Pattern Hills" />
      </div>

      <div className="launch-heading">
        <h1>WE'RE LAUNCHING SOON</h1>
      </div>
      
      <div className="icon-container">
        <img src={FaceBookIcon} alt="Facebook Icon" />
        <img src={PinterestIcon} alt="Pinterest Icon" />
        <img src={InstagramIcon} alt="Instagram Icon" />
      </div>

      <div className="countdown">
        <div className="countdown-item">
          <div className="countdown-calender">
            <div className="top">Days</div>
            <div className="bottom">{countdown.days}</div>
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-calender">
            <div className="top">Hours</div>
            <div className="bottom">{countdown.hours}</div>
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-calender">
            <div className="top">Minutes</div>
            <div className="bottom">{countdown.minutes}</div>
          </div>
        </div>
        <div className="countdown-item">
          <div className="countdown-calender">
            <div className="top">Seconds</div>
            <div className="bottom">{countdown.seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
