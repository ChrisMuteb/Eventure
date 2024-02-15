import React from 'react';
import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

function EventDetails() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Event Details</h1>
                <div>
                    <p>Event Name:</p>
                    <p>Event Date:</p>
                    <p>Location:</p>
                    <p>Description:</p>
                    <p>Event Responsible:</p>
                    <p>Participants:</p>
                    <button>Edit Event</button>
                    <button>Delete Event</button>
                </div>
            </div>
            EventDetails
        </div>
    )
}

export default EventDetails