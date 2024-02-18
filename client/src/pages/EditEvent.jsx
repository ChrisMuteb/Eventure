
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EditEvent() {
    const [event, setEvent] = useState(null);
    const { event_id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const [eventName, setEventName] = useState(event ? event.title : '');
    const [eventDate, setEventDate] = useState(event ? event.date : '');
    const [eventLocation, setEventLocation] = useState(event ? event.location : '');
    const [eventDescription, setEventDescription] = useState(event ? event.description : '');
    const [eventResponsible, setEventResponsible] = useState(event ? event.createdBy : '');
    const [eventParticipants, setEventParticipants] = useState(event ? event.participants : []);





    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/event/${event_id}`);
                setEvent(response.data || null);
                console.log(event)


                const responseUser = await axios.get('http://localhost:8081/user');
                setUsers(responseUser.data || []);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();
    }, [event_id]);

    console.log('event: ', event);



    const handleSubmit = (async (e) => {
        e.preventDefault();

        const eventData = {
            eID: event_id,
            title: eventName,
            date: eventDate,
            location: eventLocation,
            description: eventDescription,
            createdBy: eventResponsible,
            participants: [users],
            tasks: ['check google calendar as well']
        };

        try {//http://localhost:8081/event/65d0d28d733f175bd29c7420
            const response = await axios.put(`http://localhost:8081/event/${event_id}`, eventData);
            console.log('Event created successfully:', response.data);

            if (response) {
                console.log('id: ', event_id);

                // Check if id is defined before making the axios request
                if (event_id) {
                    // const userResponse = await axios.get(`http://localhost:8081/user/${event.user.id}`);
                    // const eventsResponse = await axios.get('http://localhost:8081/event');
                    // console.log('Events response:', eventsResponse.data); // Log events data

                    // // Extract user and event values from responses
                    // const user = userResponse.data;
                    // const events = eventsResponse.data;

                    // // Handle potential data validation or errors (optional)
                    // if (!user || !events) {
                    //     // Handle missing data gracefully (e.g., log, display message)
                    //     return;
                    // }
                    navigate(`/eventure/eventdetails/${event_id}`);
                } else {
                    console.error('ID is not defined');
                }
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    })

    return (
        <div>
            <Navbar />
            <div className='container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl' >
                <div>
                    <h1>Update Event</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit} className='py-8'>
                        <div className="mb-4">
                            <label>Event Name</label>
                            <input
                                type="text"
                                id="eventName"
                                placeholder="new name"
                                value={eventName} onChange={(e) => setEventName(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label>Event Date</label>
                            <input
                                type="date"
                                placeholder=""
                                id="eventDate"
                                value={eventDate} onChange={(e) => setEventDate(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label>Location</label>
                            <input
                                type="text"
                                id="eventLocation"
                                placeholder=""
                                value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        <div className="mb-4">
                            <label>Event Description</label>
                            <input
                                type="text"
                                id="eventDescription"
                                placeholder=""
                                value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2" />
                        </div>
                        {<div className="mb-4">
                            <label >Event Responsible:</label>
                            <select
                                id="eventResponsible"
                                name="eventResponsible"
                                value=""
                                onChange={(e) => setEventResponsible(e.target.value)}
                                className="rounded-md w-full border-2 border-gray-300 p-2"
                            >
                                {
                                    users.map((user) => (
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                    ))
                                }
                            </select>
                        </div>}

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
                            Update
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditEvent