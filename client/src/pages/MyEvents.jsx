import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MyEvents = () => {
    const { user_id } = useParams();
    const navigate = useNavigate();
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        const fetchMyEvents = async () => {
            try {
                // http://localhost:8081/event/myEvents/65ce12f35773283775c7ab9b
                const response = await axios.get(`http://localhost:8081/event/myEvents/${user_id}`);
                setMyEvents(response.data || []);
                console.log('myEvents user_id: ', user_id)

            } catch (error) {
                console.error('Error fetching my events:', error);
            }
        };
        // Run the fetchUsers function once when the component mounts
        fetchMyEvents();
    }, [])

    return (
        <div>
            <Navbar user={user_id} />
            <div className='container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl'>

                <div className='bg-white p-9 rounded'>
                    <h3 className='font-bold p-3'>My Upcoming Events</h3>
                    {myEvents.map((event, index) => (
                        <p key={event.id} className='m-3'>
                            My Event {index + 1}:{' '}
                            <Link to={`/eventure/eventdetails/${event.id}`}>
                                {event.title} - Date: {event.date ? event.date.split('T')[0] : 'N/A'}
                            </Link>
                        </p>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default MyEvents;