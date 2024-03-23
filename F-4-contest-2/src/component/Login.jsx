import React, { useState } from 'react';
import Profile from './Profile';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            // console.log(data);
            localStorage.setItem('userId', data.id);
            localStorage.setItem('token', data.token);
            setLoggedIn(true); 
        })
        .catch(error => {
            console.error('Error:', error);
            
        });
    };

    if (loggedIn) {
        return <Profile />;
    }

    return (
        <div>
            <h1 className='mb-20'>Login</h1>
            <form onSubmit={handleSubmit} className='flex justify-center flex-col gap-5 items-center' >
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text"
                    className='p-2'
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    className='p-2'
                        placeholder='Password'
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className='border-2 bg-blue-400' type='submit' onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
