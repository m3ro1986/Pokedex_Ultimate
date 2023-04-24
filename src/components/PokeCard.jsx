import '../styles/pokecard.css';
import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = ({url}) => {

    const [ pokemon, setPokemon ] = useState({});

    useEffect ( () => {
        axios.get(url).then( res => setPokemon( res.data ))
    },[]);

    return (
        <div className={`pokeCard ${ pokemon.types?.[0].type?.name }`}>
            <figure>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt="" />    
            </figure>
            <h5>{ pokemon.name }</h5>
        </div>
    );
};

export default PokeCard;