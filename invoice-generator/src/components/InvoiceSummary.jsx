import { Link } from "react-router-dom";

function InvoiceSummary({ id, description, quantity, price, total }) {
    return (
      <div className="w-full max-w-[500px] mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100">

        <h2 className="text-lg font-bold text-gray-700 mb-4 text-center sm:text-left">
          Invoice Items Summary
        </h2>
        
        <div className="mb-2 space-y-2">
          <p className="text-sm font-medium text-gray-600">
            Product ID: <span className="text-gray-800">{id}</span>
          </p>
          <p className="text-sm font-medium text-gray-600">
            Description: <span className="text-gray-800">{description}</span>
          </p>
          <p className="text-sm font-medium text-gray-600">
            Quantity: <span className="text-gray-800">{quantity}</span>
          </p>
          <p className="text-sm font-medium text-gray-600">
            Price: <span className="text-gray-800">Rs: {price}</span>
          </p>
          <p className="text-sm font-medium text-gray-600">
            Total: <span className="text-gray-800">Rs: {total}</span>
          </p>
        </div>

                    <Link
                    to="/invoicepreview"
                    className="h-[30px] w-full text-left text-cyan-600 font-medium outline-0 rounded-lg hover:text-cyan-700 cursor-pointer pl-1"
                    >
                    Go To InvoicePreview
                    </Link>

      </div>
    );
  }
  
  export default InvoiceSummary;
  