function InvoicePreview ({ sendername , senderaddress , senderemail , senderphone , senderwebsite , clientname , clientaddress , clientemail , clientphone , clientwebsite , id , description , quantity , price , total } ){

    const handleDownload = () => {

        const invoiceContent = `
          Invoice Preview
          ----------------------------
          Sender Details:
          Name: ${sendername}
          Address: ${senderaddress}
          Email: ${senderemail}
          Phone: ${senderphone}
          Website: ${senderwebsite}
    
          Client Details:
          Name: ${clientname}
          Address: ${clientaddress}
          Email: ${clientemail}
          Phone: ${clientphone}
          Website: ${clientwebsite}
    
          Product Details:
          Product ID: ${id}
          Description: ${description}
          Quantity: ${quantity}
          Price: Rs ${price}
          Total: Rs ${total}
        `;

    const blob = new Blob([invoiceContent], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Invoice.txt"; 
    link.click();

    URL.revokeObjectURL(link.href);
  };
  
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

        <button
          onClick={handleDownload}
          className="mt-4 w-full bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700"
        >
          Download Invoice
        </button>

</div>
        </>
    )
}
export default InvoicePreview;