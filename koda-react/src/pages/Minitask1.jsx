import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  let handleInc = () => {
    if(count < 10) {
        setCount(count + 1);
    } 
  }
  let handleDec = () => {
    if(count > 0) {
        setCount(count - 1);
    } else {
        setCount(0);
    }
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 h-screen">
      <p className='text-xl font-bold py-5'>Sudah di Click {count} Kali</p>
      <div className="flex gap-4">
        <button  className="  bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 rounded"onClick={handleInc}>Click Increment</button>
        <button  className="bg-red-500 cursor-pointer text-white font-bold py-2 px-4 rounded " onClick={handleDec}>Click Decrement</button>
      </div>
    </div>
  );
}

export default Counter;