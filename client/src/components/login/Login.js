import './loginStyle.css';
import { useState, useContext } from 'react';
import Navbar from '../navbar/Navbar';
import UserContext from '../UserContext'
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';


function Login(userObject) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [messages, setMessages] = useState([]);

    const userManager = useContext(UserContext);
    const history = useHistory();

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/security/authenticate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })
            .then(
                (response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else if (response.status === 403) {
                        return ['Incorrect login credentials'];
                    }
                    else {
                        return Promise.reject('Something went wrong, sorry :(');
                    }
                })
            .then(
                (parsedResponse) => {
                    if (parsedResponse.toString() !== 'Incorrect login credentials') {
                        const jwt = parsedResponse.jwt_token;
                        localStorage.setItem("jwt_token", jwt);
                        const userInfo = jwtDecode(jwt);
                        userManager.setCurrentUser(userInfo);

                        history.push("/");
                    }
                    else {
                        console.log(parsedResponse.toString());
                        setMessages(parsedResponse.toString());
                    }
                }
            )
            .catch(
                console.log('this is being handled by the catch')
            );
    };

return (
    <div className="login-page">
        <Navbar userObject={userObject}/>
        <div id='empty-div'></div>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className='col-md-3'></div>
                <div className="form-group col-md-6">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" id="usernameInput" value={username} onChange={updateUsername} />
                </div>
                <div className='col-md-3'></div>
            </div>

            <div className="form-row">
                <div className='col-md-3'></div>
                <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="passwordInput" value={password} onChange={updatePassword} />
                    <br></br>
                    <p className="signupError">{messages}</p>
                </div>
                <div className='col-md-3'></div>
            </div>
            <div className="row">
                <div className='col-md-5'></div>
                <button className='col-md-2 btn' type='submit'>Login</button>
                <div className='col-md-5'></div>
            </div>
            <br/>
        </form>
    </div>
)
}
export default Login;