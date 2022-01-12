import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BayWindow from './games/windows/index.jsx';
import FlashlightReact from './games/flashlight/flashlightReact';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/window">
              <BayWindow />
            </Route>
            <Route path="/flashlight">
              <FlashlightReact />
            </Route>
            <Route exact path="/3">
            </Route>
            <Route path="/4">
            </Route>
            <Route path="/5">
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
