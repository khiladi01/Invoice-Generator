function InvoicePreview ({ sendername , senderaddress , senderemail , senderphone , senderwebsite , clientname , clientaddress , clientemail , clientphone , clientwebsite , id , description , quantity , price , total } ){
  
    return(
        <>
        <div className="w-full max-w-[500px] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg shadow-slate-600 bg-gray-100 select-none ">

<h2 className="text-lg font-bold text-gray-700 mb-4 text-center sm:text-left">
  Invoice Preview
</h2>

<div className="mb-2 space-y-2">
  <p className="text-sm font-medium text-gray-600">
    Sender Name: <span className="text-gray-800">{sendername}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
    Sender Addrerss: <span className="text-gray-800">{senderaddress}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
    Sender Email: <span className="text-gray-800">{senderemail}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
    Sender Phone: <span className="text-gray-800">{senderphone}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
    Sender Website: <span className="text-gray-800">{senderwebsite}</span>
  </p>
  <br></br>
  <p className="text-sm font-medium text-gray-600">
  Client Name: <span className="text-gray-800">{clientname}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
  Client Addrerss: <span className="text-gray-800">{clientaddress}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
  Client Email: <span className="text-gray-800">{clientemail}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
  Client Phone: <span className="text-gray-800">{clientphone}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
  Client Website: <span className="text-gray-800">{clientwebsite}</span>
  </p>
  <br></br>
  <p className="text-sm font-medium text-gray-600">
   Product Id : <span className="text-gray-800">{id}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
  Product Description : <span className="text-gray-800">{description}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
  Product Quantity : <span className="text-gray-800">{quantity}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
   Product Price : <span className="text-gray-800">Rs : {price}</span>
  </p>
  <p className="text-sm font-medium text-gray-600">
   Total Bill To Pay : <span className="text-gray-800">Rs : {total}</span>
  </p>
</div>
</div>
        </>
    )
}
export default InvoicePreview;