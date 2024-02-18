import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './pages/EventDetails';
import EditEvent from './pages/EditEvent';
import CreateTask from './pages/CreateTask';
import UserProfile from './pages/UserProfile';
import MyEvents from './pages/MyEvents';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/eventure/dashboard' element={<Dashboard />} />
        <Route path='/eventure/eventcreate/:user_id' element={<CreateEvent />} />
        <Route path='/eventure/myevents/:user_id' element={< MyEvents />} />
        <Route path='/eventure/eventdetails/:event_id' element={<EventDetails />} />
        <Route path='/eventure/event/:event_id/edit' element={<EditEvent />} />
        <Route path='/eventure/event/task/:user_id' element={<CreateTask />} />
        <Route path='/eventure/user/:user_id' element={<UserProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
