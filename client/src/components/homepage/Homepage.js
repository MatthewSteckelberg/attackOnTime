import './homepage.css';

import Navbar from '../navbar/Navbar';
import Timer from '../timer/Timer'

function Homepage() {
 


    return (
        <div className="home">
            <Navbar />
            <h1 id="main-header">Attack on Time</h1>
            <h2  ></h2>
            {/* <a className='btn main-btn' href='bookshelf'  onClick={() => { setTimerIsRunning(!timerIsRunning) }}>{totalTime > 0 ? "Stop" : "Start"}</a> */}
            
            <Timer className='timer-btn'/>
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