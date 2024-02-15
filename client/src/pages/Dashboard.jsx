import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


function Dashboard() {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <h1>Welcome, [User Name]</h1>
                    <button>Create New Event</button>
                </div>
                <div>
                    <h3>Upcoming Events</h3>
                    <p>Event 1: Conference on Web Development - Date: 2024-02-15</p>
                    <p>Event 2: Tech Networking Meetup - Date: 2024-03005</p>
                </div>
                <div>
                    <h3>Your Tasks</h3>
                    <p>Task 1: Prepare presentation for the conference</p>
                    <p>Task 2: Coordinate with tech meetup speakers</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard