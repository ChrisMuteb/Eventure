import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EventDetails() {
    const { event_id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

    console.log('event id: ', event_id);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/event/${event_id}`);
                setEvent(response.data || null);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();
    }, [event_id]);

    console.log('event: ', event);

    const onEdit = () => {
        // Redirect to the edit page with the event ID
        // /eventure/event/:event_id/edit
        navigate(`/eventure/event/${event_id}/edit`);
    };

    const onDelete = async () => {
        try {
            // Make an API call to delete the event
            await axios.delete(`http://localhost:8081/event/${event_id}`);
            // Redirect to a page after successful deletion
            navigate('/');
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };


    return (
        <div>
            <Navbar />
            <div className='container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl'>
                <h1 className='flex justify-center'>Event Details</h1>
                {event ? (
                    <div className='p-4'>
                        <p className='mb-4'>Event Name: {event.title}</p>
                        <p lassName='mb-4'>Event Date: {event.date}</p>
                        <p lassName='mb-4'>Location: {event.location}</p>
                        <p lassName='mb-4'>Description: {event.description}</p>
                        <p lassName='mb-4'>Event Responsible: {event.createdBy.name}</p>
                        <p>
                            Participants:
                            {event.participant && event.participant.length > 0 ? (
                                event.participant.map((particp) => (
                                    <p key={particp.user.name}>{particp.user.name}</p>
                                ))
                            ) : (
                                <p>No participants</p>
                            )}
                        </p>
                        <div className='flex space-x-4 p-4'>
                            <button onClick={onEdit} className="bg-blue-500 w-full text-white rounded-md py-2 px-4">Edit Event</button>
                            <button onClick={onDelete} className="bg-blue-500 w-full text-white rounded-md py-2 px-4">Delete Event</button>
                        </div>
                    </div>
                ) : (
                    <p>Loading event details...</p>
                )}
            </div>
        </div>
    );
}

export default EventDetails;
