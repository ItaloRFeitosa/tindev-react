import React, { useState } from 'react';

import logo from '../../assets/logo.svg';

import './styles.css'

import api from '../../services/api'

export default function Login({ history }){
    const [username, setUsername] = useState('');
    const [alert, setAlert] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        try {
            
            const res = await api.post('/devs', {
                username
            });
            
            //console.log(res)
            history.push(`/home/${res.data._id}`);

        } catch (error) {
            
            setAlert(true);

            console.log(error);

        }
    }

    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit}>    
                <img src={logo} alt='Tindev'/>
                <input 
                    placeholder='Digite usuário do Github'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    style= {{borderColor: alert ? "#df4723":"#ddd"}}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}