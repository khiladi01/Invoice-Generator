import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SenderForm from './components/SenderForm';
import ClientForm from './components/ClientForm';
import InvoiceItem from './components/InvoiceItems';
import bgImage from './assets/bgimg.jpg';

function App() {

  const [sendername, setSenderName] = useState('');
  const [senderaddress, setSenderAddress] = useState('');
  const [senderemail, setSenderEmail] = useState('');
  const [senderphone, setSenderPhone] = useState('');
  const [senderwebsite, setSenderWebsite] = useState('');

  const [clientname, setClientName] = useState('');
  const [clientaddress, setClientAddress] = useState('');
  const [clientemail, setClientEmail] = useState('');
  const [clientphone, setClientPhone] = useState('');
  const [clientwebsite, setClientWebsite] = useState('');

  const [id , setId] = useState('')
  const [description , setDescription] = useState('')
  const [quantity , setQuantity] = useState('')
  const [price , setPrice] = useState('')
  const [total , setTotal] = useState('')

  return (
    <>  

    {/* We use backticks to declare bgImage varaible*/}

        <div className='h-screen w-screen bg-black flex justify-center items-center bg-cover bg-center' style={{backgroundImage : `url(${bgImage})` }} > 
          
          <div className='h-[500px] w-[600px] flex justify-center items-center border-0 border-cyan-700 bg-transparent rounded-lg shadow-md shadow-cyan-800'>
           <Routes>
              <Route path='/' element={<SenderForm
              sendername={sendername} setSenderName={setSenderName}
              senderaddress={senderaddress}setSenderAddress={setSenderAddress} 
              senderemail={senderemail} setSenderEmail={setSenderEmail}
              senderphone={senderphone} setSenderPhone={setSenderPhone}
              senderwebsite={senderwebsite} setSenderWebsite={setSenderWebsite}
               />} />

              <Route path='/client' element={<ClientForm
              clientname={clientname} setClientName={setClientName}
              clientaddress={clientaddress}setClientAddress={setClientAddress} 
              clientemail={clientemail} setClientEmail={setClientEmail}
              clientphone={clientphone} setClientPhone={setClientPhone}
              clientwebsite={clientwebsite} setClientWebsite={setClientWebsite}
               />} />

               <Route path='/item' element={ <InvoiceItem 
               id={id} setId={setId}
               description={description} setDescription={setDescription}
               quantity={quantity} setQuantity={setQuantity}
               price={price} setPrice={setPrice}
               total={total} setTotal={setTotal}
                /> } />
           </Routes>
           </div>
           </div>
    </>
  )
}

export default App
