import React, { useEffect, useState } from 'react';
import '../styles/pokedex.css';
import PokeCard from '../components/PokeCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const trainerName = useSelector( state => state.trainerName );
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0`)
            .then(res => setPokemons(res.data.results))
    }, [])

    return (
        <div className='pokedexBack'>
            <header>Welcome { trainerName }, here you can find your favorite POKEMON!</header>
            <span></span>
            <main>
                <div className='pokemonList'>
                    {
                        pokemons.map(e => (
                            <PokeCard key={e.url} url={e.url} />
                        ))
                    }
                </div>
            </main>
            <footer></footer>
        </div>
    );
};

export default Pokedex;