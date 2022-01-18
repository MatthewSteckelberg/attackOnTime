import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function DisabledUsers() {
    const history = useHistory();
    const location = useLocation();
    const defaultUser = {
        appUserId:1,
        user_name:"ShouldNotSeeMe",
        password:"AhhBeansImUnencoded",
        disabled:false
      }




    const [userList, setUserList] = useState([]);
    const[errors, setErrors] = useState([]);
    const getDisabledUsers = () => {
        const jwt = localStorage.getItem("jwt_token");

        const init = {
            headers: {
                "Authorization": "Bearer " + jwt
            },
        };

        return fetch('http://localhost:8080/api/users/disabled', init)
            .then(response => response.json())
            .then(
                body => setUserList(body));
    }

    console.log(userList);


    useEffect(() => {
        getDisabledUsers();
    }, [])

    const enableMe = (e) => {
        // e.preventDefault();
        console.log(e)
        const userToDisable = {...defaultUser}
        userToDisable.appUserId = e.userId;
        userToDisable.user_name = e.userName;
        userToDisable.password = e.password;
        userToDisable.disabled = true;
        userToDisable.roles = e.roles;



        let init = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body: JSON.stringify({
            appUserId: userToDisable.appUserId,
            username: userToDisable.user_name,
            password: "$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa",
            disabled: false,
            roles: ["USER"]
        })
        }

        fetch(`http://localhost:8080/api/users/disabled/${userToDisable.appUserId}`, init)
        .then(response => {
            console.log("hi")
            if(response.status === 204){
                return null;
            } else if(response.status === 400){
                console.log(response);
                return response.json();
            } else if(response.status === 404){
                return[`User ${userToDisable.appUserId} does not exist`]
            }
            return Promise.reject("Error Occured");
            })
                .then(body => {
                    if(!body){
                        console.log("Success");
                        setErrors([]);
                        window.location.reload(false);
                        // location.reload();
                        // history.push('/enabled');
                        // getAll().then(()=> reset());
                    } else {
                        setErrors(body);
                    }
            }).catch(error => console.log(error));


    }

    return (
        <div>
            <p class="text-center"><h2>User List</h2></p>
            <br />
            {userList.length > 0 ? (
                <ul>
                    {userList.map(user => <li key={user.highScoresId}>
                        <div className='aligntext' >User Name: {user.userName}<br />
                            High Score: {user.highScore}<br />
                            Active: {String(!user.disabled)} <br />
                            <div>
                                <button onClick={() =>enableMe(user)} className='col-md-2 btn'>Enable</button>
                            </div>
                            <br />
                        </div>
                    </li>
                    )}
                </ul>
            ) : (
                <div>No users to list.</div>
            )}
        </div>
    )
}

export default DisabledUsers;