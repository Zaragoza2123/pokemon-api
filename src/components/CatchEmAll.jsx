import React, { useState } from 'react';

const CatchEmAll = () => {

    //state var that will save the pokedex
    let [allPokemon, setAllPokemon] = useState([]);

    const getPokemonFromAPI=()=>{
        // fetch( to make an api call, returns a promise)
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then((pokedex)=>{ //.then() when the promise finishes, retriving our data, then runs the code inside
                //pokedex is the response from fetch
                //convert our data to Json (key value pairs --> JS object) so our JS app can read it
                return pokedex.json()
            })
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

export default CatchEmAll;