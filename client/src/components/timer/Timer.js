
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './timerStyle.css';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const location = useLocation();

    const timeHere = document.getElementById('timer-here');

    let localSeconds = localStorage.getItem('timer');
    let localPageNumber = localStorage.getItem('pagenumber');
    console.log('local: ' + localSeconds)

    useEffect(() => {
        if (localSeconds != null) {
            setSeconds(parseInt(localSeconds));
            setIsActive(true)
            console.log('active: ' + isActive)
            document.getElementById('timer-box').removeAttribute('hidden')
        } else {
            setSeconds(0)
        }

        if(location.pathname === '/bookshelf'){
            console.log('yo, bookshelf')
            document.getElementById('start-button').hidden = 'true'
            document.getElementById('next-button-1').removeAttribute('hidden')
        } else if(location.pathname ==='/flashlight') {
            document.getElementById('start-button').hidden = 'true'
            document.getElementById('next-button-1').hidden = 'true'
            document.getElementById('next-button-2').removeAttribute('hidden')
        } else if(location.pathname === '/' && localSeconds != null) {
            document.getElementById('start-button').hidden = 'true';
            document.getElementById('next-button-1').hidden = 'true';
            document.getElementById('next-button-2').hidden = 'true';
            document.getElementById('stop-button').removeAttribute('hidden')
        }
    }, [])

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            console.log(seconds)
            if(seconds !=null){
            timeHere.innerHTML = seconds;
            }
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    
    const games = ['/bookshelf', '/flashlight', '/']


    const nextButton = () => {
        localStorage.setItem('timer', seconds)
        setIsActive(!isActive)
    }

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
        localStorage.removeItem("timer")
    }
    const stop = () => {
        setIsActive(false);
        localStorage.removeItem("timer")

        // TODO: 
        // CREATE save high score here.
    }


    return (
        <>
            <Link className='btn main-btn' id='start-button' to={games[0]} onClick={nextButton}>Start</Link>
            <Link hidden className='btn' id='next-button-1' to={games[1]} onClick={nextButton}>Next</Link>
            <Link hidden className='btn' id='next-button-2' to={games[2]} onClick={nextButton}>Next</Link>
            {/* <a hidden className='btn' id='next-button-3' href={games[3]} onClick={nextButton}>Next</a> */}
            <button hidden className='btn main-btn' id='stop-button' onClick={stop}>Stop</button>
            <button id='reset-button' onClick={reset}>Reset</button>
            <h2 hidden id='timer-box'><span id='timer-here'></span> seconds</h2>
        </>
    )
}

export default Timer;