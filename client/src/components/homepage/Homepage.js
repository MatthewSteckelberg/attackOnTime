import './homepage.css';
import { useState, useEffect } from 'react';

function Homepage() {
    const [totalTime, setTotalTime] = useState(0);

    const [timerIsRunning, setTimerIsRunning] = useState(false);

    const timerBox = document.getElementById("timerBox");
        useEffect(() => {
          let interval = null;
          if (timerIsRunning) {
            interval = setInterval(() => {
              setTotalTime(totalTime => totalTime + 1);
              // this timerbox is just a test for now
              timerBox.innerHTML = totalTime;  
            }, 1000);
          } else if (!timerIsRunning && totalTime !== 0) {
            clearInterval(interval);
          }
          return () => clearInterval(interval);
        }, [timerIsRunning, totalTime]);



    return (
        <div className="home">

            <h1 id="main-header">Attack on Time</h1>
            <h2 id='timerBox' ></h2>

            <a className='btn' onClick={() => {setTimerIsRunning(!timerIsRunning)}}>{timerIsRunning ? "Stop" : "Start"}</a>
            <div className='description-box'>
                <p className="attack-description">Think you have what it takes to play the number one fastest growing </p>
                <p className="attack-description">reaction time based game in the world. Click the Start if you want to </p>
                <p className="attack-description">give it a try.  And don't forget to signup and login if you want to see </p>
                <p className="attack-description">your scores on the Leaderboard. </p>
            </div>
            <br />


        </div>
    )

}

export default Homepage;