import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BayWindow from './games/windows/index.jsx';
import FlashlightReact from './games/flashlight/flashlightReact';
import Navbar from './components/navbar/Navbar';
import DragCounter from './games/drag_counter/index.js';
import Bookshelf from './games/bookshelf';
import Login from './components/login/Login';
import Picture from './games/picture_tear/index'
import Homepage from './components/homepage/Homepage';
import Descriptions from './components/descriptions/Descriptions';
import { useEffect, useState } from 'react';
import TimerContext from './components/TimerContext';

function App() {

  const [timer, setTimer] = useState(0);
  const timerObject = {
    timer,
    setTimer
  };
  console.log('app: ' + timer)

  const timerIsRunning = localStorage.getItem("timer")
  console.log('local: ' + timerIsRunning)


  useEffect(() => {
    const existingTimer = localStorage.getItem('timer');
    if (existingTimer) {
      setTimer(existingTimer);
    }
  })

  return (
    <div className="App">

      <BrowserRouter>
        <TimerContext.Provider value={timerObject}>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <Homepage timer={timer} />
            </Route>
            <Route path="/descriptions">
              <Descriptions />
            </Route>
            <Route path="/window">
              <BayWindow />
            </Route>
            <Route path="/flashlight">
              <FlashlightReact />
            </Route>
            <Route path="/drag">
              <DragCounter />
            </Route>
            <Route path="/bookshelf">
              <Bookshelf />
            </Route>
            <Route path="/picture">
              <Picture />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </TimerContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
