import '../styles/pokecard.css';
import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = ({url}) => {

    const [ pokemon, setPokemon ] = useState({});

    useEffect ( () => {
        axios.get(url).then( res => setPokemon( res.data ))
    },[]);

    return (
        <div className="pokeCard">
            {pokemon.name}
        </div>
    );
};

export default PokeCard;