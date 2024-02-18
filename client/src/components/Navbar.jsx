import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
    console.log('Nav user.id: ', user);
    return (
        <nav className="navbar w-full flex relative top-0 h-20 bg-blue-500 px-4 items-center justify-between text-white z-50">
            <div className="flex items-center">
                <h1 className="text-4xl font-extrabold">
                    <Link to='/vitalsign'>Eventure</Link>
                </h1>
            </div>
            <div className="links">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-white px-4 py-2 rounded-full text-center">Home</Link>
                    <Link to={`/eventure/myevents/${user}`} className="text-white px-4 py-2 rounded-full text-center">Events</Link>
                    <Link to={`/eventure/event/task/${user}`} className="text-white px-4 py-2 rounded-full text-center">Tasks</Link>
                    <Link to={`/eventure/user/${user}`} className="text-white px-4 py-2 rounded-full text-center">Profile</Link>
                    <Link to="/" className="text-white px-4 py-2 rounded-full text-center">Logout</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
