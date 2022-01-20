import './loginStyle.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const DEFAULT_USER = {
    user_name: "asdfghjk",
    password: "asdfghjk@1",
    disabled: false,
    roles: ["USER"]
};


function SignUp(userObject) {
    const [user, setUser] = useState(DEFAULT_USER)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [errorMessages, setErrorMessages] = useState([]);
    const history = useHistory();

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const updatePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }

    function validatePassword() {

    }


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert("Not set up yet.")
    // }



    const handleSubmit = (event) => {
        event.preventDefault();

        // const newUser = { ...user };
        // newUser.



        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                roles: ["USER"]
            })
            // body: JSON.stringify(newUser),
        };

        fetch("http://localhost:8080/api/user", init)
            .then(
                (response) => {
                    if (response.status != 201) {
                        return response.json();
                    } else {
                        return null;
                    }
                }
            )
                .then(
                    (errorMessages) => {
                        if(errorMessages !== null)
                        {
                            console.log(errorMessages)
                        setErrorMessages(errorMessages);
                        }
                        else{
                            history.push("/")
                        }
                    }
                )

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
                        {username != "" ? <></> : <p className="signupError">Username Required</p>}
                    </div>
                    <div className='col-md-3'></div>
                </div>

                <div className="form-row">
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="passwordInput" value={password} onChange={updatePassword} />
                        {password != "" || passwordConfirm != "" ? <></> : <p className="signupError">Password Required</p>}
                        {password == passwordConfirm ? <></> : <p className="signupError">Passwords do not match</p>}
                    </div>
                </div>

                <div className="form-row">
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" id="passwordConfirm" value={passwordConfirm} onChange={updatePasswordConfirm} />
                        <ul>{errorMessages.map((error, index) => <li className="signupError" key={`error${index}`}>{error}</li>)}</ul>
                    </div>

                </div>
                <div className="row">
                    <div className='col-md-5'></div>
                    {username != "" && (password == passwordConfirm && password != "") ? <button id="signup" className='col-md-2 btn' type='submit'>SignUp</button> : <button id="signupDisabled" className='col-md-2 btn' type='submit' disabled>SignUp</button>}
                    {/* <button className='col-md-2 btn' type='submit'>SignUp</button> */}
                    <div className='col-md-5'></div>
                </div>
                <br />
            </form>
        </div>
    )
}
export default SignUp;