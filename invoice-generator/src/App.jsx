import { useState } from 'react'
import SenderForm from './components/SenderForm';

function App() {

  const [InvoiceData , setInvoiceData] = useState({
    sender : {name: "" , address : "" , phone : "" , email : "" , website : ""},
    client: {name : "" , address : "" , phone : "" , email : "" , website : ""},
    items : [],
    discount : 0,
    notes : ""
  });

  return (
    <>
      <div className='bg-gray-500 h-screen w-full grid place-content-center'>
        <SenderForm 
          sender={InvoiceData.sender}
          setInvoiceData={setInvoiceData}
        />
      </div>
    </>
  )
}

export default App
