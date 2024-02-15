import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


function CreateTask() {
    const handleSubmit = () => {

    }
    return (
        <div>
            <Navbar />
            <div>
                <h1>Create New Task</h1>
                <dir>
                    <form onSubmit={handleSubmit}>

                    </form>
                </dir>
            </div>
            CreateTask
        </div>
    )
}

export default CreateTask