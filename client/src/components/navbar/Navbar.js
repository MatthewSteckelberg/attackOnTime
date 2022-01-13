import './navbarStyle.css';
import { useState, useEffect, useContext } from 'react';
import TimerContext from '../TimerContext';


function Navbar() {
  const timerManager = useContext(TimerContext);
  console.log('nav: '+ timerManager.timer)
  // const timerManager = useContext(TimerContext);
  // const [totalTime, setTotalTime] = useState(0);

  // const timerBox = document.getElementById('timer-box');
  // console.log('nav: ' + timerManager.timer)
  // setTotalTime(timerManager.timer);
  // console.log('nav: '+ totalTime);
  // useEffect(() => {
  //   console.log(totalTime)

  // ), [totalTime]}

    // timerBox.innerHTML = timerManager.timer;




  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        {/* <h1 className="navbar-brand" id="navbar-header" >Attack on Time</h1> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" id="home-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="login-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="description-link" href="/descriptions">Game Descriptions</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Games
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/window">Bay Window</a>
                <a className="dropdown-item" href="/flashlight">Flashlight</a>
                <a className="dropdown-item" href="/drag">Drag Counter</a>
                <a className="dropdown-item" href="/bookshelf">Bookshelf</a>
                <a className="dropdown-item" href="/picture">Picture Tear</a>
              </div>
            </li>
            <li>
              <h2 className='timer-box'>

              </h2>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )

};

export default Navbar;