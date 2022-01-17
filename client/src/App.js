import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BayWindow from './games/windows/index.jsx';
import FlashlightReact from './games/flashlight/flashlightReact';
import DragCounter from './games/drag_counter/index.js';
import Bookshelf from './games/bookshelf';
import Login from './components/login/Login';
import Picture from './games/picture_tear/index'
import Homepage from './components/homepage/Homepage';
import Descriptions from './components/descriptions/Descriptions';
import HighScores from './components/highScores/HighScores';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import UserContext from './components/UserContext';

import SignUp from './components/signup/SignUp';


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const userObject = {
    currentUser,
    setCurrentUser
  };

  const onLogout = () => {
    localStorage.removeItem("jwt_token");
    setCurrentUser(null);
  }
  useEffect(() => {


    const existingJwt = localStorage.getItem("jwt_token");
    if (existingJwt) {
      const userObject = jwtDecode(existingJwt);

      if (currentUser == null || userObject.sub !== currentUser.sub) {
        setCurrentUser(userObject);
        // console.log(currentUser.status);
      }
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userObject}>
          {/* <Navbar userObject={userObject}/> */}
          <Switch>
            <Route exact path="/">
              <Homepage userObject={userObject} />
            </Route>
            <Route path="/descriptions">
              <Descriptions userObject={userObject} />
            </Route>
            <Route path="/highscores">
              <HighScores userObject={userObject} />
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
              <Login userObject={userObject} />
            </Route>
            <Route path="/signup">
              <SignUp userObject={userObject} />
            </Route>
            {/* <Route exact path="/users">
            {currentUser ? <Users /> : <Redirect to="/"/>}
          </Route> */}
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
