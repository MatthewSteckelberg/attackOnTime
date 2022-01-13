import './homepage.css';
import { useState, useEffect, useContext } from 'react';
import TimerContext from '../TimerContext';

function Homepage() {
    const timerManager = useContext(TimerContext);
    const [totalTime, setTotalTime] = useState(0);
    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const timerBox = document.getElementById("timerBox");
    const time = document.getElementById('time-goes-here');

if(timerManager.timer != 0) {
    timerBox.removeAttribute("hidden");
}
console.log('manager: ' + timerManager.timer)
    useEffect(() => {
        let interval = null;
        if (timerIsRunning) {
            interval = setInterval(() => {
                setTotalTime(totalTime => totalTime + 1);
                timerManager.setTimer(totalTime);

                time.innerHTML = timerManager.timer;
                localStorage.setItem("timer", totalTime);
            }, 1000);
        } else if (!timerIsRunning && totalTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerIsRunning, totalTime]);

    if(!timerIsRunning) {
        localStorage.removeItem('timer')
        // setTotalTime(0)
    }


    return (
        <div className="home">
            <div hidden class="card" id='timerBox'>
                <div class="card-body row" id="timerBody">
                   <h2 id='time-and-seconds'><span className='col-md-7'id="time-goes-here"></span> Seconds</h2>
                   <div className='col-md-1'></div>
                   {/* <button className='btn timer-btn col-md-4' onClick={() => { setTimerIsRunning(!timerIsRunning) }}>{timerIsRunning ? "Stop" : "Play Again"}</button> */}
                </div>
            </div>
            <h1 id="main-header">Attack on Time</h1>
            <h2  ></h2>

            <a className='btn main-btn' href='/bookshelf' onClick={() => { setTimerIsRunning(!timerIsRunning) }}>{totalTime > 0 ? "Stop" : "Start"}</a>
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