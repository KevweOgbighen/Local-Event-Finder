import React, { useState } from 'react';
import { loginUser } from '../backendapi';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            setMessage(response); // Success message
        } catch (error) {
            setMessage(error); // Display error message
        }
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>
            <h2>Log In</h2>
            </div>
            <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <button type="submit" className="event-button">Login</button>
            </div>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Login;
