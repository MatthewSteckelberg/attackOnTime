import './loginStyle.css';
import { useState } from 'react';
import Navbar from '../navbar/Navbar';

function SignUp() {
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


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert("Not set up yet.")
    // }



    const onSubmitTodo = (event) => {
        event.preventDefault();

        const jwt = localStorage.getItem( "jwt_token");

        fetch( "http://localhost:8080/api/todos",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + jwt
                    },
                    body: JSON.stringify( {description: todo} )
                }
        ).then( 
            (response) => {
                if( response.status != 201 ){
                    //todo: show valiation errors properly
                    console.log( response );
                } else {
                    history.push( "/" );
                }

            }
        );


        //on success we need to do this...
        history.push( "/" );
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
                </div>
                <div className="form-row">
                    <div className='col-md-3'></div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" id="passwordConfirm" value={password} onChange={updatePasswordConfirm} />
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-5'></div>
                    <button className='col-md-2 btn' type='submit'>SignUp</button>
                    <div className='col-md-5'></div>
                </div>
                <br />
            </form>
        </div>
    )
}
export default SignUp;