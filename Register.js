import React, { useState } from 'react';
import { registerUser } from '../backendapi';

function Register() {
    const [form, setForm] = useState({ email: '', firstName: '', lastName: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(form);
            setMessage(response); // Success message
        } catch (error) {
            setMessage(error); // Display error message
        }
    };

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', fontSize: '30px'}}>
            <h2>Register</h2>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                </div>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
                </div>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
                </div>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                </div>
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <button type="submit" className='event-button'>Register</button>
                </div>
                
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Register;
