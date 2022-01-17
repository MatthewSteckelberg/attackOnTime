import './navbarStyle.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation();


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
              <Link className={location.parseInt === "/" ? "nav-link active" : "nav-link"} id="home-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="signup-link" to="/signup">
                SignUp
              </Link>
            </li>
            {/* <li className="nav-item">



          {currentUser ? <Link className="nav-link" to="/"><span onClick={onLogout} >
                {"Logout " + currentUser.sub}</span></Link> :
              <Link className="nav-link" id="login-link" to="/Login" >
                Login
              </Link>}
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" id="description-link" to="/descriptions">
                Game Descriptions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="description-link" to="/highscores">
                High Scores
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Games
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/window">Bay Window</Link>
                <Link className="dropdown-item" to="/flashlight">Flashlight</Link>
                <Link className="dropdown-item" to="/drag">Drag Counter</Link>
                <Link className="dropdown-item" to="/bookshelf">Bookshelf</Link>
                <Link className="dropdown-item" to="/picture">Picture Tear</Link>
              </div>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )

};

export default Navbar;