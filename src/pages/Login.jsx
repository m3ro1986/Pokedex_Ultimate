import { useState } from 'react';
import '../styles/login.css';

const Login = () => {

    const [ name, setName ] = useState('');

    return (
        <div className="loginBack"> 
            <main>
                <div className='pokedex'>
                    <span></span>
                    <figure></figure>
                    <p> { 'Hello trainer, give your name to start!!! ' } </p>
                    <input 
                        type="text"
                        value={name}
                        onChange={ e => setName( e.target.value )} 
                    />
                </div>
            </main>
        </div>
    );

};

export default Login;