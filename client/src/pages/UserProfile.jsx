import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import lady from '../assets/lady.jpg';

const UserProfile = () => {
    const { user_id } = useParams();
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/user/${user_id}`);
                setUser(response.data || null);

                const result = await axios.get('http://localhost:8081/user');
                setUsers(result.data || null);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();
    }, [user_id]);

    return (
        <div>
            <Navbar />
            <div className="flex justify-between p-8">
                {/* User Profile Section */}
                <div className="flex flex-col items-center"> {/* Align items in a column */}
                    <img src={lady} alt="" className="object-contain h-28 w-28 rounded-full mx-auto m-4" />
                    <h2 className="text-xl font-bold">User name: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>Role: {user.role}</h2>
                </div>

                {/* Vertical Line */}
                <div className="border-l-2 h-64 mx-8"></div>

                {/* Chat Conversation Section */}
                <div className="flex flex-col items-end"> {/* Align items in a column on the right */}
                    {
                        users.map((usr) => (
                            usr.id !== user.id ?
                                (<Link key={usr.id} to={`/eventure/user/${usr.id}`}
                                    className="flex items-center mb-4 border-rounded" style={{ textDecoration: 'none' }}>
                                    <img src={lady} alt="" className="object-contain h-12 w-12 rounded-full mx-4" />
                                    <h3 className="text-sm font-bold">{usr.name}</h3>
                                </Link>) : null
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
