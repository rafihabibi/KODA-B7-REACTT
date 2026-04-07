import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export default function CharDetail() {
    const [char, setChar] = useState({});
    const {id} = useParams();
    useEffect(() => {
        async function getChar() {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                // const detailPromies = data.results.map(
                // character => fetch(character.url).then(res => res.json()));
                // const allCharacters = await Promise.all(detailPromies);
                setChar(data);
            } catch (error) {
                (error)
            }
        }
        getChar();
    }, [id])
     if(!char.name) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
    return(
      <div className="flex flex-row bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    
    {/* Gambar kotak di kiri */}
    <img 
        src={char.image} 
        alt={char.name} 
        className="w-2/5 object-cover p-3"
    />
    
    {/* Pembungkus teks di kanan */}
    <div className="flex flex-col justify-center w-full px-4 p-4">
        
        {/* Nama Karakter */}
        <p className="text-xl font-bold text-slate-800 mb-3">
            {char.name}
        </p>

        {/* Kotak info abu-abu */}
        <div className="w-fit bg-slate-50 rounded p-3 text-sm text-slate-600  border border-gray-100">
            <p className="flex justify-between">
                <span className="font-semibold text-slate-500">Status:</span> 
                <span className="font-bold">{char.status}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-slate-500">Gender:</span> 
                <span>{char.gender}</span>
            </p>
            <p className="flex justify-between">
                <span className="font-semibold text-slate-500">Origin:</span> 
                <span className="text-right truncate ml-4">{char.origin.name}</span>
            </p>
        </div>

    </div>
</div>
    );
}