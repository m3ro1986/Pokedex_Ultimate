import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import axios from 'axios';
import MessageToTrainer from '../components/messageToTrainer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTrainerName } from '../store/slices/trainerNameSlice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = () => { return Math.ceil( Math.random() * 500 ) };
    const [ name, setName ] = useState('');
    const [ loading, setLoading ] = useState('');
    const [ pokemon, setPokemon ] = useState({});
    const [ pokemonId, setPokemonId ] = useState( id );

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then( res => setPokemon(res.data))
    }, [])

    const getInPokedex = () => {
        
        if (name !== '') {
            setLoading('loading')
            dispatch(getTrainerName(name));
            setTimeout( () => navigate('/pokedex'), 2000) 
            setTimeout( () => setLoading(''), 2000) 
        } else {
            alert('give a name')
        }
        
    }

    return (
        <div className="loginBack"> 
            <main>
                <div className='pokedex'>
                    <span className={`${loading}`}></span>
                    <figure></figure>
                    {/* <p> { 'Hello trainer, give your name to start!!!' } </p> */}
                    <MessageToTrainer /> 
                    {/* <img src={ pokemon.sprites?.versions['generation-v']['black-white'].animated[`${gif}`] } alt="" /> */}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`} alt="" />
                    <h6>{ pokemon.name } #{ pokemon.id } </h6>
                    <input 
                        type="text"
                        placeholder='your name'
                        value={ name }
                        onChange={ e => setName( e.target.value )} 
                        autoFocus
                    />
                    <div className='controls'>
                        <p> this pokemon has a heigth of { pokemon.height } decimeters and weight { pokemon.weight } hectograms.</p>
                        <button onClick={ getInPokedex }>Get In</button>
                    </div>
                </div>
            </main>
        </div>
    );

};

export default Login;