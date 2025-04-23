import React, { useState } from 'react';
import { useDispatch } from 'shared/hooks';
import {login} from 'shared/slices'

const AuthApp = () => {
    const [credentials, setCredentials] = useState({email:'', password:''})
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Mock authentication
        dispatch(login({
            user: { name: 'Admin user', email: credentials.email },
            token: 'mock-jwt-token',
            role: 'admin'
        }))
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button onClick={handleLogin}>Sign In</button>
        </div>
    );
}

export default AuthApp