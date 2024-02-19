import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CreateTask() {
    // http://localhost:8081/task/65d0d28d733f175bd29c7420
    const { user_id } = useParams();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [eventId, setEventID] = useState('');

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:8081/event');
                const access_token = localStorage.getItem('access_token');
                const response = await axios.get('http://localhost:8080/apiman-gateway/EventureLTD/EventureAPIMan/1.0/event', {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                const eventsData = response.data;
                if (eventsData !== null) {
                    setEvents(eventsData);
                }
            } catch (error) {
                alert('An error occurred. Please try again later.');
                console.error(error);
            }
        };

        fetchData();


    }, []); // Empty dependency array to run the effect only once on mount


    const handleSubmit = async (e) => {
        e.preventDefault();

        const eventData = {
            title: taskTitle,
            description: taskDescription,
            status: taskStatus,
            date: taskDate,
        };

        try {
            console.log('task to be send: ', eventData)
            const response = await axios.post(`http://localhost:8081/task/${eventId}`, eventData);
            console.log('Task created successfully:', response.data);

            if (response) {

                // Check if id is defined before making the axios request
                if (response.data.id) {
                    setEventID(null)
                    // navigate('/eventure/dashboard', { state: { user, events } });
                } else {
                    console.error('ID is not defined');
                }
            }
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }
    return (
        <div>
            <Navbar />
            <div>
                <div className='bg-white p-9 rounded'>
                    <h3 className='font-bold p-3'>Upcoming Events</h3>
                    {events.map((event, index) => (
                        <p key={event.id} className='m-3'>
                            Event {index + 1}:{' '}
                            <Link onClick={() => setEventID(event.id)}>
                                {event.title} - Date: {event.date ? event.date.split('T')[0] : 'N/A'}
                            </Link>
                        </p>
                    ))}
                </div>

                <h1>Describe the Task</h1>

                {eventId !== '' ? (
                    <div>

                        <form onSubmit={handleSubmit} className='py-8'>
                            <div className="mb-4">
                                <label>Task Title</label>
                                <input
                                    type="text"
                                    id="taskTitle"
                                    placeholder="Task Title"
                                    value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                                    className="rounded-md w-full border-2 border-gray-300 p-2" />
                            </div>
                            <div className="mb-4">
                                <label>Task Description</label>
                                <input
                                    type="text"
                                    id="taskDescription"
                                    placeholder="Task Description"
                                    value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                                    className="rounded-md w-full border-2 border-gray-300 p-2" />
                            </div>
                            <div className="mb-4">
                                <label>Task Date</label>
                                <input
                                    type="date"
                                    placeholder="Event Date (JJ/MM/AAAA)"
                                    id="taskDate"
                                    value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
                                    className="rounded-md w-full border-2 border-gray-300 p-2" />
                            </div>
                            <div className="mb-4">
                                <label >Task Status:</label>
                                <select
                                    id="eventResponsible"
                                    name="eventResponsible"
                                    value={taskStatus}
                                    onChange={(e) => setTaskStatus(e.target.value)}
                                    className="rounded-md w-full border-2 border-gray-300 p-2"
                                >

                                    <option key='todo' value='TO DO'>TO DO</option>
                                    <option key='inprogress' value='IN PROGRESS'>IN PROGRESS</option>
                                    <option key='done' value='DONE'>DONE</option>

                                </select>
                            </div>

                            <button type="submit" className="bg-blue-500 w-full text-white rounded-md py-2 px-4">
                                Add Task
                            </button>
                        </form>
                    </div>
                ) : null}
            </div>
            CreateTask
        </div>
    );
}

export default CreateTask