import { useEffect, useState } from 'react';
import '../styles/pokedex.css';
import PokeCard from '../components/PokeCard';
import axios from 'axios';

const Pokedex = () => {

    const [ pokemons, setPokemons ] = useState([]);

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0`)
            .then( res => setPokemons( res.data.results ))
    }, [])

    return (
        <div className='pokedexBack'>
            <header>hello world</header>
            <main>
                {
                    pokemons.map( e => (
                        <PokeCard key={e.url} url={e.url} />
                    ))
                }
            </main>
            <footer></footer>
        </div>
    );
};

export default Pokedex;