import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function CreateEvent() {
    const [eventName, setEventName] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventLocation, setEventLocation] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventResponsible, setEventResponsible] = useState('')
    const [eventParticipants, setEventParticipants] = useState([])
    const [users, setUsers] = useState([]);
    const { user_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8081/user');
                setUsers(response.data || []);

                const responseParticipants = await axios.get('http://localhost:8081/participant');
                setEventParticipants(responseParticipants.data || []);
            } catch (error) {
                console.error('Error fetching users and participants:', error);
            }
        };

        // Run the fetchUsers function once when the component mounts
        fetchUsers();
    }, []);




    const handleSubmit = async (e) => {
        e.preventDefault();

        const eventData = {
            title: eventName,
            date: eventDate,
            location: eventLocation,
            description: eventDescription,
            createdBy: eventResponsible,
            participants: [],
            tasks: ['do the R&D first']
        };

        try {
            const response = await axios.post('http://localhost:8081/event', eventData);
            console.log('Event created successfully:', response.data);

            if (response) {
                console.log('id: ', user_id);

                // Check if id is defined before making the axios request
                if (user_id) {
                    const userResponse = await axios.get(`http://localhost:8081/user/${user_id}`);
                    const eventsResponse = await axios.get('http://localhost:8081/event');
                    console.log('Events response:', eventsResponse.data); // Log events data

                    // Extract user and event values from responses
                    const user = userResponse.data;
                    const events = eventsResponse.data;



                    // Handle potential data validation or errors (optional)
                    if (!user || !events) {
                        // Handle missing data gracefully (e.g., log, display message)
                        return;
                    }
                    navigate('/eventure/dashboard', { state: { user, events } });
                } else {
                    console.error('ID is not defined');
                }
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };


    return (
        <div>
            <Navbar />
            <div className='container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl' >
                <div>
                    <h1>Create New Event</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit} className='py-8'>
                        <div className="mb-4">
                            <label>Event Name</label>
                            <input
                                type="text"
                                id="eventName"
                                placeholder="Event Name"
                                value={eventName} onChange={(e) => setEventName(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label>Event Date</label>
                            <input
                                type="date"
                                placeholder="Event Date (JJ/MM/AAAA)"
                                id="eventDate"
                                value={eventDate} onChange={(e) => setEventDate(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label>Location</label>
                            <input
                                type="text"
                                id="eventLocation"
                                placeholder="Event Location"
                                value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label>Event Description</label>
                            <input
                                type="text"
                                id="eventDescription"
                                placeholder="Event Description"
                                value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label >Event Responsible:</label>
                            <select
                                id="eventResponsible"
                                name="eventResponsible"
                                value={eventResponsible}
                                onChange={(e) => setEventResponsible(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2"
                            >
                                {
                                    users.map((user) => (
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="mb-4">
                            <label >Participants:</label>

                            {
                                eventParticipants.map((particp) => (
                                    <label key={particp.user.name} className="rounded-md w-full border-2 border-gray-300 p-2">
                                        {particp.user.name || ''}
                                    </label>
                                ))


                            }
                        </div>


                        <button type="submit" className="bg-blue-500 w-full text-white rounded-md py-2 px-4">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default CreateEvent;

