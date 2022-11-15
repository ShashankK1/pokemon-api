import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
const App = () => {
    //"https://pokeapi.co/api/v2/pokemon?offset=1&limit=1"
    //"https://pokeapi.co/api/v2/pokemon/1/"
    //https://pokeapi.co/api/v2/pokemon?limit=1
    // let data;
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    // .then(res=>res.json())
    // .then(d=>console.log(d));
    console.log("app");
    const [pokemonData, setPokemonData] = useState([]);
    // const [page, setPage] = useState(1);
    useEffect(() => {
        let pokemonData = [];
        const fetchData = async () => {
            const jsonData = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
            const resultsArray = jsonData.data.results;

            const myPokemonPromise = new Promise((res, rej) => {
                resultsArray.map(pokemon => {

                    axios.get(pokemon.url).then(
                        attributeJsonData => {
                            const info_data = attributeJsonData.data;
                            const Data = {
                                name: pokemon.name,
                                info: info_data
                            }
                            // console.log("Data", Data);
                            pokemonData.push(Data);

                            if (pokemonData.length === 10) {
                                res(pokemonData);
                            }
                        }
                    );
                    return 1;

                })
            });

            const poke = await myPokemonPromise;
            console.log(poke);
            setPokemonData(poke);

        }
        fetchData();
        


    }, []);
    return (
        <div className='app'>
            <header className='header-component'>
                <Header />
            </header>
            <div className='content'>
                <Cards props={pokemonData} />
            </div>
        </div>
    )
}

export default App