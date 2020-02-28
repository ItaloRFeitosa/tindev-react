import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import './styles.css'

import api from '../../services/api'

export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const res = await api.post('/devs', {
            username
        });

        history.push(`/home/${res.data._id}`);
    }

    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit}>    
                <img src={logo} alt='Tindev'/>
                <input 
                    placeholder='Digite usuário do Github'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}