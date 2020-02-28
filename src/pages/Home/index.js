import React, { useEffect, useState} from 'react';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

import DevCard from '../../components/DevCard';

import './styles.css';

export default function Home({ match }){

    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs(){
            const res = await api.get('/devs', {
                headers: {
                    user: match.params.devId,
                }
            })

            setDevs(res.data);
        }

        loadDevs();

    }, [match.params.devId]);

    return(
        <>
        <header><img src={logo} alt='Tindev'/></header>
        <div className='home-container'>
            <ul>
                    {devs.map(dev => <li><DevCard 
                        avatar={dev.avatar} 
                        name={dev.name}
                        bio={dev.bio}
                    /></li>)}
            </ul>

        </div>
        </>
    );
} 