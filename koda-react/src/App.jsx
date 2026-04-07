import Minitask1 from './pages/Minitask1.jsx';
import Minitask2 from './pages/Minitask2.jsx';
import Minitask3 from "./pages/Minitask3.jsx";
import Minitask5 from './pages/Minitask5.jsx';
import CharDetail from './components/CharDetail.jsx'
import Home from "./pages/home.jsx";
import Header from "./header.jsx";
import Footer from "./Footer.jsx"
import Review from './pages/Review.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import './input.css'


function App() {
  
  return(
   <BrowserRouter>
    <div className="min-h-screen flex flex-col">
    <Header/>
    <main className='flex-1'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/minitask1' element={<Minitask1/>}/>
    <Route path='/minitask2' element={<Minitask2/>}/>
    <Route path='/minitask3' element={<Minitask3/>}/>
    <Route path='/minitask5' element={<Minitask5/>}/>
    <Route path='/characters/:id/:slug' element={<CharDetail/>}/>
    <Route path='/review' element={<Review/>}/>
   </Routes>
   </main>
   <Footer/>
   </div>
   </BrowserRouter>

  );
}

export default App

