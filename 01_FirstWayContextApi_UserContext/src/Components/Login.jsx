import UserContext from "../Context/UserContext"
import React, { useState, useContext } from 'react'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const submitHandler = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }
    return (
        <>
            <div className="bg-indigo-100 w-1/6 p-2">
                <div className="m-2">
                    <label htmlFor="username">Username</label>
                    <input className="rounded-lg" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>

                <div className="m-2">
                    <label htmlFor="password">Password</label>
                    <input className="rounded-lg" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className="m-2 bg-indigo-800 rounded-md p-1 text-white hover:bg-indigo-500" type="submit" onClick={submitHandler}>Login</button>
            </div>
        </>
    )
}

export default Login