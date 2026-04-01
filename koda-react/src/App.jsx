import Minitask1 from './minitask1.jsx';
import './input.css'
import Minitask2 from './minitask2.jsx';
function App() {
  
  return(
    <div className='grid grid-cols-2 gap-10'>
      <div>
        <h1 className='font-bold text-2xl text-center pt-5'>Minitask1</h1>
        <Minitask1/>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-center pt-5'>Minitask2</h1>
        <Minitask2/>
      </div>
    </div>
  );
}

export default App
