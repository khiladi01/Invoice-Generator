import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SenderForm from './components/SenderForm';
import ClientForm from './components/ClientForm';
import bgImage from './assets/bgimg.jpg';

function App() {


  return (
    <>  
    {/* We use backticks to declare bgImage varaible*/}

        <div className='h-screen w-screen bg-black flex justify-center items-center bg-cover bg-center' style={{backgroundImage : `url(${bgImage})` }} > 
          
          <div className='h-[500px] w-[600px] flex justify-center items-center border-0 border-cyan-700 bg-transparent rounded-lg shadow-md shadow-cyan-800'>
           <Routes>
              <Route path='/' element={<SenderForm />} />
              <Route path='/client' element={<ClientForm />} />
           </Routes>
           </div>
           </div>
    </>
  )
}

export default App
