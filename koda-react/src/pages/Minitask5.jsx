import {useState, useEffect} from 'react'
import { Link } from 'react-router';

export default  function RicknMorty() {
    const [Karakter, setKarakter] = useState([]);

    useEffect(() => {
      async function getFullChar() {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          const data = await response.json();
          setKarakter(data.results);
        } catch (error) {
          console.error(error);
        }
      }
      getFullChar();
    }, []);
    return(
        <div className="container mx-auto p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Daftar Karakter Rick N Morty</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Karakter.map((char) => {
            const slug = char.name.toLowerCase().replaceAll(" ","-")
            return(
                <Link to={`/characters/${char.id}/${slug}`} key={char.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
                <img src={char.image} alt="image " className="w-full h-56 object-cover "  />
                <div>
                    <p className='text-center'>{char.name}</p>
                    
                </div>
            </div></Link>
            );
           })}
        </div>
           
        </div>

    );
}