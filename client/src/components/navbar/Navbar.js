import './navbarStyle.css';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';

function Navbar() {

  const userManager = useContext(UserContext);

  const location = useLocation();

  const onLogout = () => {
    localStorage.removeItem("jwt_token");
    userManager.setCurrentUser(null);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        {/* <h1 className="navbar-brand" id="navbar-header" >Attack on Time</h1> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav navbar-nav-left">
            <li className="nav-item">
              <Link className={location.parseInt === "/" ? "nav-link active" : "nav-link"} id="home-link" to="/">
                Home
              </Link>
            </li>
            {/* {userManager.currentUser ?
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={onLogout}>
                  Logout {userManager.currentUser.sub}
                </Link></li> :
              <li className="nav-item">
                <Link className="nav-link" id="login-link" to="/Login" >
                  Login
                </Link> </li>}
*/}
            {userManager.currentUser ? <></> :
              <li className="nav-item">
                <Link className="nav-link" id="signup-link" to="/signup">
                  SignUp
                </Link>
              </li>} 
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
        <div className='login-logout-spot nav navbar-nav navbar-right'>
            {userManager.currentUser ?
              <Link className='login-logout-btn' id='nav-login-button' to="/" onClick={onLogout}>
                Logout {userManager.currentUser.sub}
              </Link>
              : <Link className='login-logout-btn' id='nav-logout-button' to='/Login' >
                Login
              </Link>}
          </div>
      </nav>
    </>
  )

};

export default Navbar;