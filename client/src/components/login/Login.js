import './loginStyle.css';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Not set up yet.")
    }

    return (
        <div className="login-page">
            <Navbar />
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
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className="row">
                    <div className='col-md-5'></div>
                    <button className='col-md-2 btn' type='submit'>Login</button>
                    <div className='col-md-5'></div>
                </div>
                <br />
            </form>
        </div>
    )
}
export default Login;