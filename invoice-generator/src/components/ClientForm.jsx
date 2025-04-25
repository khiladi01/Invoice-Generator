import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

function ClientForm({
    clientname, setClientName, clientaddress, setClientAddress, clientemail, setClientEmail, clientphone, setClientPhone, clientwebsite, setClientWebsite
}) {

    const [error , setError] = useState("") 
    
    const ErrorHandler = (e) => {
        e.preventDefault();

        if (clientname  == "" || clientaddress == "" || clientemail == "" || clientphone == ""){
            setError("Error : All Fields Are Required")
            return;
        }
        
        else if(clientname.length < 3){
            setError("Error : Not Valid Name")
            return;
        }

        else if(clientaddress.length > 80){
            setError("Error : Not Valid Address")
            return;
        }

        else if(clientphone.length < 10){
            setError("Error : Phone Is Not Valid")
            return;
        }

        else if(clientwebsite.length < 5){
            setError("Error : Website Not Found")
            return;
        }

        else{
            setError("")
            alert("Sender Form Submitted")
            console.log("Sender Data :" , {clientname,clientaddress,clientemail,clientphone,clientwebsite});
            return;
        }
        
    }

    return (
        <>
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-sm">
                <header className='h-[30px] w-full flex justify-center items-center bg-transparent text-cyan-50 font-bold text-lg p-5 underline-offset-8 underline decoration-2 decoration-cyan-600'>
                    <p>Client Form</p>
                </header>
                <form onSubmit={ErrorHandler}>
                    <input
                        type="text"
                        value={clientname}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Client Name"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="address"
                        value={clientaddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        placeholder="Client Address"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="email"
                        value={clientemail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="Client Email"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="text"
                        value={clientphone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="Client Phone"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="text"
                        value={clientwebsite}
                        onChange={(e) => setClientWebsite(e.target.value)}
                        placeholder="Put Your website URL (Optional)"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0 italic' />
                    <input
                        type="submit"
                        value="Submit"
                        className='h-[60px] w-full border-1 border-cyan-600 p-4 rounded-lg flex justify-center items-center m-1 hover:bg-cyan-100 hover:text-black font-medium cursor-pointer outline-0' />

                    {error && <p className='text-pink-700 h-[30px] text-left ml-3 font-semibold italic'> {error} </p>}

                    <Link
                        to="/item"
                        className="h-[30px] w-[180px] block text-left text-cyan-600 ml-3 font-medium outline-0 rounded-lg hover:text-cyan-700 cursor-pointer "
                    >
                        Go to Product Item Page
                    </Link>
                </form>
            </div>
        </div>
        </>
    );
}
export default ClientForm;
