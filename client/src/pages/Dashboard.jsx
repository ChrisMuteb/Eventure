import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const location = useLocation();
    const { user, events } = location.state || {};
    const [tasks, setTasks] = useState([]);

    console.log(events);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/task/${user.id}`);
                setTasks(response.data || []);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [user.id]);

    if (!user) {
        console.warn('Dashboard received no user data from Home page.');
        return null;
    }

    return (
        <div className='bg-gray-300'>
            <Navbar />
            <div className=' h-screen w-5/6 mx-auto '>
                <div className='flex justify-between m-9'>
                    <h1 className='font-bold'>Welcome, [{user.name || 'User Name'}]</h1>
                    <Link to={`/eventure/eventcreate/${user.id}`} className='bg-blue-500 text-white p-3 border rounded'>
                        Create New Event
                    </Link>
                </div>
                <div className='bg-white p-9 rounded'>
                    <h3 className='font-bold p-3'>Upcoming Events</h3>
                    {events.map((event, index) => (
                        <p key={event.id} className='m-3'>
                            Event {index + 1}:{' '}
                            <Link to={`/eventure/eventdetails/${event.id}`}>
                                {event.title} - Date: {event.date ? event.date.split('T')[0] : 'N/A'}
                            </Link>
                        </p>
                    ))}

                </div>
                <div className='bg-white mt-6 p-9 rounded'>
                    <h3 className='font-bold p-3'>Your Tasks</h3>
                    {tasks.map((task, index) => (
                        <p key={task.id} className='bg-gray-300 m-3 p-3'>Task {index + 1}: {task.description}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
