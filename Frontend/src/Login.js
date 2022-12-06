import React, { useState } from 'react';

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
     
        const userObj = {username, password}

        const configObject = {
            method: "POST",
            headers: {
                "content-type": "application/JSON"
            },
            body: JSON.stringify(userObj)
        }

        fetch('http://localhost:9292/login', configObject)
        .then((r) => r.json())
        .then(userObj => {
            console.log(userObj)
            setUsername("")
            setPassword("")
        })
    }

    return (
        <div>
            <form className='login-form' onSubmit={handleSubmit}>
                <input value={username} name='username' placeholder='Username' onChange={handleUsernameChange} required></input>
                <input value={password} name='password' placeholder='Password' onChange={handlePasswordChange} type='password' required></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;