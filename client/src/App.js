import Lottie from 'lottie-react';
import './App.css';
import animationData from './assets/Animation - 1708009463557.json'
import { useRef } from 'react';

function App() {
  const phoneRef = useRef()
  return (
    <div className="min-h-screen flex items-center justify-center lg:mx-48">
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>Eventure</h1>

        <p className='text-lg'>Unlocking Seamless Event Planning Experiences</p>
        <div className='flex gap-2 justify-center'>
          <button>Login</button>
          <button>Sign up</button>
        </div>
        <Lottie lottieRef={phoneRef} animationData={animationData} />
      </div>
    </div>
  );
}

export default App;
