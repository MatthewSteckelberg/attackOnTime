import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BayWindow from './games/windows/index.js';
import FlashlightReact from './games/Flashlight/FlashlightReact';




function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      <div className="app-body">
        <BrowserRouter>
          <Switch>
            <Route path="/1">
              <BayWindow />
            </Route>
            <Route path="/2">
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
    </div>
  );
}

export default App;
