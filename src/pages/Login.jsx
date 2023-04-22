import { useEffect, useState } from 'react';
import '../styles/login.css';
import axios from 'axios';
import MessageToTrainer from '../components/messageToTrainer';

const Login = () => {

    const id = () => { return Math.ceil( Math.random() * 500 ) }
    const [ name, setName ] = useState('');
    const [ pokemon, setPokemon ] = useState({});
    const [ message, setMessage ] = useState('');
    const [ gif, setGif ] = useState('front_default')
    const [ pokemonId, setPokemonId ] = useState( id )

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then( res => setPokemon(res.data))
    }, [])

    // useEffect( () => {
    //     const timeout = setTimeout(() => {
    //         setMessage( 'Hello trainer, give your name to start!!!'.slice( 0, message.length + 1 ))
    //     }, 50)

    //     return () => clearTimeout( timeout )
    // }, [message]);
    


    console.log( pokemon )

    return (
        <div className="loginBack"> 
            <main>
                <div className='pokedex'>
                    <span></span>
                    <figure></figure>
                    {/* <p> { 'Hello trainer, give your name to start!!!' } </p> */}
                    <MessageToTrainer /> 
                    {/* <img src={ pokemon.sprites?.versions['generation-v']['black-white'].animated[`${gif}`] } alt="" /> */}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`} alt="" />
                    <h6>{ pokemon.name } #{ pokemon.id } </h6>
                    <input 
                        type="text"
                        placeholder='your name'
                        value={name}
                        onChange={ e => setName( e.target.value )} 
                        autoFocus
                    />
                    <div className='controls'>

                    </div>
                </div>
            </main>
        </div>
    );

};

export default Login;