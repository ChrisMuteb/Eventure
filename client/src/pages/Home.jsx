import Lottie from 'lottie-react';
import '../App.css';
import animationData from '../assets/Animation.json';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
// import Dashboard from './Dashboard'; // Import Dashboard component correctly

const Home = () => {
    const phoneRef = useRef();
    const navigate = useNavigate();
    // const isLogin = useAuth();

    const handleClick = async () => {
        try {

            // APIMan endpoint: https://localhost:8443/apiman-gateway/EventureLTD/EventureAPIMan/1.0
            // const userResponse = await axios.get('http://localhost:8081/user/65ce0fe7545cfe0111126018');
            // const userResponse = await axios.get('https://localhost:8443/apiman-gateway/EventureLTD/EventureAPIMan/1.0/user/65ce0fe7545cfe0111126018')


            // if (!userResponse.data.id) {
            //     alert('User data not found.');
            //     return; // Early return to prevent unnecessary navigation
            // }

            // Fetch event data (replace with your specific API endpoint)
            // const eventsResponse = await axios.get('http://localhost:8081/event');
            // const eventsResponse = await axios.get('https://localhost:8443/apiman-gateway/EventureLTD/EventureAPIMan/1.0/event');
            // console.log('Events response:', eventsResponse.data); // Log events data

            // Extract user and event values from responses
            // const user = userResponse.data;
            // const events = eventsResponse.data;

            // Handle potential data validation or errors (optional)
            // if (!user || !events) {
            //     // Handle missing data gracefully (e.g., log, display message)
            //     return;
            // }

            // Use useNavigate hook for programmatic navigation
            // navigate('/eventure/dashboard', { state: { user, events } });
            navigate('eventure/login');
        } catch (error) {
            alert('An error occurred. Please try again later.');
            console.error(error); // Log error for troubleshooting
        }
    };


    return (
        // isLogin ? (
        <div className="min-h-screen flex items-center justify-center lg:mx-48 p-4">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Eventure</h1>
                <p className="text-lg">Unlocking Seamless Event Planning Experiences</p>
                <div className="flex gap-2 justify-center">
                    <button className="bg-blue-500 w-40 text-white rounded-md py-2 px-4" onClick={handleClick}>
                        Login
                    </button>
                    {/* <button>Sign up</button> */}
                </div>
                <Lottie lottieRef={phoneRef} animationData={animationData} />
            </div>
        </div>
        // ) : (
        //     <div>not login</div>
        // )
    );

};

export default Home;
