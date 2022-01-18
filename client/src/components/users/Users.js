import { useEffect, useState } from 'react';

function User() {
    const [userList, setUserList] = useState([]);
    const getAllUsers = () => {
        const jwt = localStorage.getItem("jwt_token");

        const init = {
            headers: {
                "Authorization": "Bearer " + jwt
            },
        };

        return fetch('http://localhost:8080/api/users', init)
            .then(response => response.json())
            .then(
                body => setUserList(body));
    }

    console.log(userList);


    useEffect(() => {
        getAllUsers();
    }, [])

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
                                <button className='col-md-2 btn'>Disable</button>
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

export default User;