// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { useLocation, Link } from 'react-router-dom';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const MyEvents = () => {
//     const { user_id } = useParams();
//     const navigate = useNavigate();
//     const [myEvents, setMyEvents] = useState([]);

//     useEffect(()=>{
//         const fetchMyEvents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8081/user');
//                 setMyEvents(response.data || []);

//             } catch (error) {
//                 console.error('Error fetching my events:', error);
//             }
//         };
//         // Run the fetchUsers function once when the component mounts
//         fetchUsers();
//     }, [])

//     return (
//         <div>
//             <Navbar />
//             <div className='container w-3/5 mx-auto px-4 py-8 border mt-12 rounded-2xl'>
//             <div>
//                     <h1>All my</h1>
//                 </div>
//             <p>My events list</p>

//             </div>
//         </div>
//     );
// }

// export default MyEvents;