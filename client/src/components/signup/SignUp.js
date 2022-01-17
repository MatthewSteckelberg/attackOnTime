import './loginStyle.css';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import { useHistory } from 'react-router-dom';
const DEFAULT_USER ={
    user_name="",
    password = "",
    disabled=false
}


function SignUp() {
    const[user,setUser] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const updatePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }

    const history = useHistory();

    function validatePassword(){

    }


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert("Not set up yet.")
    // }



    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newUser = { ...user };
    
          const init = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(newUser),
          };
    
          fetch("http://localhost:8080/api/adduser", init)
            .then((response) => {
              if (response.status !== 201) {
                return Promise.reject("response is not 200 OK");
              }
              return response.json();
            })
            .then((data) => {
              history.push("/confirmation", { msg: "👍🏾" });
            })
            .catch(() => {
              history.push("/error", { msg: "👎🏾" });
            });
        
      };







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
                        {username != "" ? <></> :<p className="signupError">Username Required</p>}
                    </div>
                    <div className='col-md-3'></div>
                </div>

                <div className="form-row">
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="passwordInput" value={password} onChange={updatePassword} />
                        {password != "" || passwordConfirm != "" ? <></> :<p className="signupError">Password Required</p>}
                        {password == passwordConfirm ? <></> : <p className="signupError">Passwords do not match</p>}
                    </div>
                </div>
                
                <div className="form-row">
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" id="passwordConfirm" value={passwordConfirm} onChange={updatePasswordConfirm} />
                    </div>
                    
                </div>
                <div className="row">
                    <div className='col-md-5'></div>
                    {username !="" && (password == passwordConfirm && password != "" ) ? <button id="signup" className='col-md-2 btn' type='submit'>SignUp</button> : <button id="signupDisabled" className='col-md-2 btn' type='submit' disabled>SignUp</button>}
                    {/* <button className='col-md-2 btn' type='submit'>SignUp</button> */}
                    <div className='col-md-5'></div>
                </div>
                <br />
            </form>
        </div>
    )
}
export default SignUp;