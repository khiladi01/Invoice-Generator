import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

function SenderForm({
    name, setName, address, setAddress, email, setEmail, phone, setphone, website, setWebsite
}) {

    const [error , setError] = useState("") 
    
    const handleerror = (e) => {
        e.preventDefault();

        if (name  === ""){
            setError("Name Is Required")
            return;
        }else{
            console.log("Sender Data :" , {name,address,email,phone,website});
        }
        
    }

    return (
        <>
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-sm">
                <header className='h-[30px] w-full flex justify-center items-center bg-transparent text-cyan-50 font-bold text-lg p-5 underline-offset-8 underline decoration-2 decoration-cyan-600'>
                    <p>Sender Form</p>
                </header>
                <form onSubmit={handleerror}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sender Name"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-800 font-medium outline-0' />
                    <input
                        type="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Sender Address"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-800 font-medium outline-0' />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Sender Email"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-800 font-medium outline-0' />
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        placeholder="Sender Phone"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-800 font-medium outline-0' />
                    <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Put Your website URL (Optional)"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-800 font-medium outline-0 italic' />
                    <input
                        type="submit"
                        value="Submit"
                        className='h-[60px] w-full border-1 border-cyan-600 p-4 rounded-lg flex justify-center items-center m-1 hover:bg-cyan-100 hover:text-black font-medium cursor-pointer outline-0' />

                    {error && <p className='text-red-500 h-[30px] text-left p-1'> {error} </p>}

                    <Link
                        to="/client"
                        className="h-[30px] w-[148px] block text-center text-slate-800 p-1.5 font-medium outline-0   hover:text-cyan-600 cursor-pointer "
                    >
                        Go to Client Page
                    </Link>
                </form>
            </div>
        </div>
        </>
    );
}
export default SenderForm;
