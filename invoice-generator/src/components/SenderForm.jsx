import React from 'react'

const SenderForm = ({
    name , setName,
    address , setAddress,
    email , setEmail,
    phone , setphone,
    website , setWebsite
}) => {
    const handler = (e) => {
        e.preventDefault();

        console.log("Sender Form Submitted", {name, address, email, phone, website});
    }
     
    return(
        <>
           <form onSubmit={handler}>
              <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Sender Name"
              />
              <input 
              type="address" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Sender Address"
              />
              <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Sender Email" 
              />
              <input 
              type="text" 
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              placeholder="Sender Phone"
              />
              <input 
              type="file"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Put Your website URL (Optional)" 
              />
              <input 
              type="submit" 
              value="Submit"
              className='h-[30px] w-[200px] '
              />
            </form>
        </>
    )
}
export default SenderForm;