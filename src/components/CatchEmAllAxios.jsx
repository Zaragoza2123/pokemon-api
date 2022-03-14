import React, { useState } from 'react';
import axios from 'axios';
const CatchEmAllAxios = () => {

    //state var that will save the pokedex
    let [allPokemon, setAllPokemon] = useState([]);

    const getPokemonFromAPI=()=>{
        // fetch( to make an api call, returns a promise)
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((pokedex)=>{
                console.log('got the pokedex dudeeee');
                console.log(pokedex);
                setAllPokemon(pokedex.results);
            })
            //.catch() will run if the promise breakes for anyreason
            .catch((error)=>{
                console.log("error when fetching, somthing whent wrong -->", error);
            })
    }

    return (
        <div>
            <button onClick={getPokemonFromAPI} >Catch Pokemon</button>
            {
                allPokemon.map((pokemonObj, index)=>{
                    return <div>
                        <ul>
                            <li><a href={pokemonObj.url}>{pokemonObj.name}</a></li>
                        </ul>
                    </div>
                
                })
            }
        </div>
    );
}

export default CatchEmAllAxios;