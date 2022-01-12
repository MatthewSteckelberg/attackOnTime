import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BayWindow from './games/windows/index.jsx';
import FlashlightReact from './games/Flashlight/flashlightReact';
import Navbar from './components/navbar/Navbar';
import DragCounter from './games/drag_counter/index.js';
import Bookshelf from './games/bookshelf';
import Login from './components/Login';
import Picture from './games/picture_tear/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
