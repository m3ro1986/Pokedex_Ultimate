import React, { useEffect, useState } from 'react';
import '../styles/pokedex.css';
import PokeCard from '../components/PokeCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const trainerName = useSelector( state => state.trainerName );
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(52);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
            .then(res => setPokemons(res.data.results))
    }, [limit, offset])

    return (
        <div className='pokedexBack'>
            <header>
                <p>
                   Welcome <span style={{color: 'white '}}>{ trainerName }</span>, here you can find your favorite POKEMON! 
                </p> 
            </header>
            <div>
                <i class='bx bx-chevrons-left'></i>
            </div>
            <main>
                <div className='pokemonList'>
                    {
                        pokemons.map(e => (
                            <PokeCard key={e.url} url={e.url} />
                        ))
                    }
                </div>
            </main>
            <footer>
                <div>
                    <i class='bx bx-chevron-left'></i>
                    <span>all pokemons</span>
                    <i class='bx bx-chevron-right' ></i>
                </div>
            </footer>
        </div>
    );
};

export default Pokedex;