import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

function SenderForm({
    sendername, setSenderName, senderaddress, setSenderAddress, senderemail, setSenderEmail, senderphone, setSenderPhone, senderwebsite, setSenderWebsite
}) {

    const [error , setError] = useState("") 
    
    const ErrorHandler = (e) => {
        e.preventDefault();

        if (sendername  === "" || senderaddress === "" || senderemail === "" || senderphone === ""){
            setError("Error : All Fields Are Required")
            return;
        }
        
        else if(sendername && sendername.length < 3){
            setError("Error : Not Valid Name")
            return;
        }

        else if(senderaddress && senderaddress.length > 80){
            setError("Error : Not Valid Address")
            return;
        }

        else if(senderphone && senderphone.length < 10){
            setError("Error : Phone Is Not Valid")
            return;
        }

        else if(senderwebsite && senderwebsite.length < 5){
            setError("Error : Website Not Found")
            return;
        }

        else{
            setError("")
            alert("Sender Form Submitted")
            console.log("Sender Data :" , {sendername,senderaddress,senderemail,senderphone,senderwebsite});
            return;
        }
    }

    return (
        <>
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-sm">
                <header className='h-[30px] w-full flex justify-center items-center bg-transparent text-cyan-50 font-bold text-lg p-5 underline-offset-8 underline decoration-2 decoration-cyan-600'>
                    <p>Sender Form</p>
                </header>
                <form onSubmit={ErrorHandler}>
                    <input
                        type="text"
                        value={sendername}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Sender Name"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="address"
                        value={senderaddress}
                        onChange={(e) => setSenderAddress(e.target.value)}
                        placeholder="Sender Address"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="email"
                        value={senderemail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="Sender Email"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="text"
                        value={senderphone}
                        onChange={(e) => setSenderPhone(e.target.value)}
                        placeholder="Sender Phone"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0' />
                    <input
                        type="text"
                        value={senderwebsite}
                        onChange={(e) => setSenderWebsite(e.target.value)}
                        placeholder="Put Your website URL (Optional)"
                        className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0 italic' />
                    <input
                        type="submit"
                        value="Submit"
                        className='h-[60px] w-full border-1 border-cyan-600 p-4 rounded-lg flex justify-center items-center m-1 hover:bg-cyan-100 hover:text-black font-medium cursor-pointer outline-0' />

                    {error && <p className='text-pink-700 font-semibold h-[30px] text-left p-1 ml-2 italic '> {error} </p>}

                    <Link
                        to="/client"
                        className="h-[30px] w-[148px] block text-center text-cyan-600 p-1 font-medium outline-0   hover:text-cyan-700 cursor-pointer "
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
