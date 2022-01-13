import './navbarStyle.css';

function Navbar() {


  const timerBox = document.getElementById("timerBox");

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
let totalTime = 0;

// Define the work to be done
var doWork = function () {
    totalTime = ++justSomeNumber
    console.log(totalTime);
    timerBox.innerHTML = totalTime;
};

// Define what to do if something goes wrong
var doError = function () {
    console.warn('The drift exceeded the interval.');
};

// (The third argument is optional)
var ticker = new AdjustingInterval(doWork, 1000, doError);


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      {/* <h1 className="navbar-brand" id="navbar-header" >Attack on Time</h1> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id="home-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="login-link" href="/Login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="description-link" href="/#">Game Descriptions</a>
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