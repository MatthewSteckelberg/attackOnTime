import './homepage.css';
import { useState } from 'react';

function Homepage() {
    const [totalTime, setTotalTime] = useState(0);


    const startTimer = (e) => {
        e.preventDefault();
        ticker.start();
    };
    const timerBox = document.getElementById('timerBox');

    function AdjustingInterval(workFunc, interval, errorFunc) {
        var that = this;
        var expected, timeout;
        this.interval = interval;

        this.start = function () {
            expected = Date.now() + this.interval;
            timeout = setTimeout(step, this.interval);
        }

        this.stop = function () {
            clearTimeout(timeout);
        }

        function step() {
            var drift = Date.now() - expected;
            if (drift > that.interval) {
                // You could have some default stuff here too...
                if (errorFunc) errorFunc();
            }
            workFunc();
            expected += that.interval;
            timeout = setTimeout(step, Math.max(0, that.interval - drift));
        }
    }

    // For testing purposes, we'll just increment
    // this and send it out to the console.
    var justSomeNumber = 0;
    let timerTime = 0;

    // Define the work to be done
    var doWork = function () {
        timerTime = ++justSomeNumber
        updateTimeState(timerTime);
        // timerBox.innerHTML = timerTime;
        // setTotalTime(timerTime);
        console.log('timer: ' + timerTime)
        // console.log('state: ' + totalTime);
    };

    const updateTimeState = (time) => {
        setTotalTime(parseInt(time));
        console.log('state: ' + totalTime);
        console.log('time: ' + time)
    }

    // Define what to do if something goes wrong
    var doError = function () {
        console.warn('The drift exceeded the interval.');
    };

    // (The third argument is optional)
    var ticker = new AdjustingInterval(doWork, 1000, doError);


    return (
        <div className="home">

            <h1 id="main-header">Attack on Time</h1>
            <h2 id='timerBox' ></h2>

            <a className='btn' onClick={startTimer}>Start</a>
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