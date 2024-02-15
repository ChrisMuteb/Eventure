import React from 'react'
import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom';

function CreateEvent() {
    const handleSubmit = () => {

    }
    return (
        <div>
            <Navbar />
            <div>
                <h1>Create New Event</h1>
                <div>
                    <form onSubmit={handleSubmit}>

                    </form>
                </div>
            </div>
            <p>Create Event</p>
        </div>
    )
}

export default CreateEvent