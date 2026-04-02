import { useState, useEffect } from "react";



function PokemonData() {
    const [dataPokemon, setDataPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
                const data = await response.json();
                const detailPromises = data.results.map(pokemon => 
                fetch(pokemon.url).then(res => res.json()));
                const allPokemonDetails = await Promise.all(detailPromises);
                setDataPokemon(allPokemonDetails);


            } catch (error) {
                console.error(error);
            }
        }
        fetchPokemon();
    }, []);
    return (
        <div className="min-h-screen bg-white">
            <div className="flex justify-center">
                <h1 className="text-3xl font-bold py-2">Pokemon</h1>
            </div>
            <div className="flex justify-center">
                <input type="text"  onChange={(e) => setSearchPokemon(e.target.value)} className=" border border-solid border-black rounded bg-white p-2"/>
            </div>
            
            <ul className="grid grid-cols-4 gap-5 p-5 max-w-300 m-auto">
                {dataPokemon
                .filter(dataPokemon => dataPokemon.name.includes(searchPokemon))
                .map(pokemon => 

                    <li key={pokemon.name} className="bg-gray-200 rounded-2xl p-4 shadow-md uppercase text-center font-bold">
                        <img src={pokemon.sprites.front_default} alt="pokemon"className="w-[120px] h-[120px] m-auto "/>
                        {pokemon.name}
                        <ul className="text-sm text-center">
                        {pokemon.types.map(t => t.type.name).join(", ")}
                        
                        </ul>
                    </li>
                )
                }
            </ul>
        </div>
        );
    
}    

export default PokemonData;