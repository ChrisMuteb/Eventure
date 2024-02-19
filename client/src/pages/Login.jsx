import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/auth/realms/EventureRealm/protocol/openid-connect/token',
                `grant_type=password&client_id=myclient&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            // Handle the response
            const { access_token, refresh_token } = response.data;

            // Store tokens in local storage (or use a more secure storage solution)
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            // Fetch user and events data with the access token in the headers
            const userResponse = await axios.get('http://localhost:8080/apiman-gateway/EventureLTD/EventureAPIMan/1.0/user/65cdd14d28a6f4162a02bad4', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });

            const eventsResponse = await axios.get('http://localhost:8080/apiman-gateway/EventureLTD/EventureAPIMan/1.0/event', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });


            const user = userResponse.data;
            const events = eventsResponse.data;

            if (!user || !events) {
                // Handle missing data gracefully (e.g., log, display message)
                return;
            }

            // Use navigate to redirect to the dashboard page with user and events data as state
            navigate('/eventure/dashboard', { state: { user, events } });
        } catch (error) {
            // Handle login error
            setError('Invalid username or password');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md p-8 rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-2 border-gray-300 p-2 w-full rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 border-gray-300 p-2 w-full rounded-md"
                    />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
