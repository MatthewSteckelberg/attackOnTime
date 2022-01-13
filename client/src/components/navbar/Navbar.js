import './navbarStyle.css';
import  React, { useState, useEffect }  from "react";

// import { useLocation } from "react-router-dom";


function Navbar() {
  // const [totalTime, setTotalTime] = useState(timer);

  // const location = useLocation();
 

  const timerBox = document.getElementById("timerBox");


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
            <div className='timer-box'>

            </div>
          </li>
        </ul>
      </div>
     
    </nav>
     </>
  )

};

export default Navbar;