import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const auth = firebase.auth();

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log('User created successfully!');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };
    return (
        <div>
            <h2>Signup</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
