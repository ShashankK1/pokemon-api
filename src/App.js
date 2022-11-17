import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import PaginationComponent from './components/Pagination/PaginationComponent';

const App = () => {
    const basicUrl = "https://pokeapi.co/api/v2/pokemon";
    const [reset, setReset] = useState(false);
    //For url state with respect to page selected
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    const [count, setCount] = useState(1); //For total pokemons
    const [pokemonData, setPokemonData] = useState([]);// For Pokemon Data state
    const [err, setError] = useState(''); // For Error state

    // searchHandler function will be called when we click on search icon
    const searchHandler = (e) => {
        const searchUrl = basicUrl + '/' + e;
        setReset(true);
        fetchSearchData(e, searchUrl);
    }

    // fetchData is a function which fetches Pokemon Data with respect to its paging
    const fetchData = async () => {
        setError('');
        let pokemonData = [];
        const jsonData = await axios.get(url);
        const resultsArray = jsonData.data.results;
        setCount(jsonData.data.count);
        const myPokemonPromise = new Promise((res, rej) => {
            resultsArray.map(pokemon => {
                axios.get(pokemon.url).then(
                    attributeJsonData => {
                        const info_data = attributeJsonData.data;
                        const Data = {
                            name: pokemon.name,
                            info: info_data
                        }

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
        setPokemonData(poke);

    }

    // fetchSearchData is a function which is called when searchHandler is called
    const fetchSearchData = async (e, searchUrl) => {
        try {

            const jsonData = await axios.get(searchUrl);
            const Data = [{
                name: e,
                info: jsonData.data
            }]
            setPokemonData(Data);
            setError('');
        }
        catch (err) {
            if (err.response.status === 404) {
                setError("Invalid Search!");
            }
        }
    }

    //Every time url changes that is new page has been clicked useEffect runs fetchData
    useEffect(() => {
        fetchData();
    }, [url]);

    //changeHandler is a funcction which runs when there is a change in page
    const changeHandler = (e) => {
        setReset(false);
        let offset = (e * 10) - 10;
        if (offset === 1150) {
            offset = 1144;
        }
        const removeOffset = url.split("offset=");
        const newUrl = removeOffset[0] + "offset=" + offset.toString();
        setUrl(newUrl);
    }
    return (
        <>
            <div className='app'>
                <header className='header-component'>
                    <Header err={err} handler={searchHandler} />
                </header>
                <div className='content'>
                    <Cards props={pokemonData} />
                </div>
            </div>
            <div className='pagination-box'>
                <PaginationComponent reset={reset} count={count} changeHandler={changeHandler} />
            </div>
        </>
    )
}

export default App