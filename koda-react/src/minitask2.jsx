import { useState } from 'react';

function FormInput({ InputProduct }) {
    const [productName, setNameProduct] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let handleSubmit = () => {
       if(productName === "") {
         setErrorMessage("Input tidak boleh Kosong!");
       } else {
        setErrorMessage("")
        InputProduct((datalama) => [...datalama, productName]);
        setNameProduct("");
       }
    }
    return(
    <div className="flex flex-col gap-4 border p-6 rounded-lg shadow-md bg-white">
        <div className='flex items-center gap-2'>
            <label className='flex items-center gap-2 font-bold text-xl' htmlFor="product">Nama Product: </label>
            <input className='border border-solid border-black rounded-lg px-4 py-2 focus:border-green-400 focus:ring-green-400' type="text" value={productName} placeholder='Masukan Nama Product' onChange={(e) => setNameProduct(e.target.value) }/>
        </div>
             <p className='text-red-500 text-sm italic text-center '>{errorMessage}</p>
            <button className=' border-2 border-solid border-black px-6 py-2 rounded-lg bg-green-500 text-black font-bold hover:bg-green-600 shadow-md active:shadow-sm cursor-pointer' onClick={handleSubmit}>Submit</button>
           
    </div>
    );
}

function DataProduct({ tableProduct }) {
    return(
       <table className='border border-collapse border-slate-500 w-full max-w-lg mt-5 mx-auto'>
        <tr>
            <th>Product</th>
        </tr>
            {tableProduct.map((isiBarang, nomorUrut) => (
             <tr key={nomorUrut} className='border border-slate-400'>
                
                <td className='p-3 text-center text-black font-medium'>{isiBarang}</td>
              </tr>
            ))}

       </table>
    );
}

function ProductPage() {
    const [items, setItems] = useState([])
    return(
        <div className='flex flex-col items-center mt-10 gap-8 h-screen'>
        <FormInput InputProduct={setItems}/>
        <DataProduct tableProduct={items}/>
        </div>
    );
}

export default ProductPage;