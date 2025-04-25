import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function InvoiceItem({ id, setId, description, setDescription, quantity, setQuantity, price, setPrice, total, setTotal }) {

    useEffect(() => {
        if (quantity && price) {
            const CalculateTotal = parseFloat(quantity) * parseFloat(price);
            setTotal(CalculateTotal.toFixed(2));
        } else {
            setTotal("");
        }
    }, [quantity, price, setTotal]);

    const [error, setError] = useState('');

    const Handler = (e) => {
        e.preventDefault();

        if (id === "" || description === "" || quantity === "" || price === "") {
            setError("All Fields Are Required");
            return;
        } else {
            setError("");
            alert("InvoiceItem Data : Submitted Successfully");
            console.log("InvoiceForm Data:", id, description, quantity, price, total);
        }
    };

    return (
        <>
            <form onSubmit={Handler} className="w-full max-w-[500px] mx-auto p-4 flex flex-col items-center">
                <header className='w-full flex justify-center items-center bg-transparent text-cyan-50 font-bold text-lg p-5 underline-offset-8 underline decoration-2 decoration-cyan-600'>
                    <p>InvoiceItems Form</p>
                </header>

                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter Product Item Id"
                    className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0'
                />

                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Products Description"
                    className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0'
                />

                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Products Quantity"
                    className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0'
                />

                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Products Price"
                    className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0'
                />

                <input
                    type="text"
                    value={total}
                    readOnly
                    onChange={(e) => setTotal(e.target.value)}
                    placeholder="Total Bill"
                    className='h-[40px] w-full border-1 border-cyan-600 p-4 rounded-lg m-1 text-slate-200 font-medium outline-0 italic'
                />

                <input
                    type="submit"
                    value="Submit"
                    className='h-[60px] w-full border-1 border-cyan-600 p-0 rounded-lg flex justify-center items-center m-1 hover:bg-cyan-100 hover:text-black font-medium cursor-pointer outline-0'
                />

                {error && <p className='text-pink-700 text-left w-full pl-1 p-0 font-semibold italic'> {error} </p>}

                <Link
                    to="/invoiceitemsummary"
                    className="h-[30px] w-full text-left text-cyan-600 font-medium outline-0 rounded-lg hover:text-cyan-700 cursor-pointer pl-1"
                >
                    Go To InvoiceItemSummary
                </Link>
            </form>
        </>
    );
}
export default InvoiceItem;
