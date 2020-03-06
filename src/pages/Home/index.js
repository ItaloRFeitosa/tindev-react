import React, { useEffect, useState} from 'react';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

import DevCard from '../../components/DevCard';

import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import './styles.css';

export default function Home({ match }){

    const [devs, setDevs] = useState([]);

    async function likeButton(devId){
        const res = await api.post(`/devs/${devId}/likes`, {},{
            headers: {
                user: match.params.devId,
            }
        });

        console.log(res)
        if (res.status == 200) {
            setDevs(devs.filter( (dev) => dev._id !== devId));
        } else {
            console.log(res.data);
        }
        
    }

    async function dislikeButton(devId){
       
        const res = await api.post(`/devs/${devId}/dislikes`, {},{
            headers: {
                user: match.params.devId,
            }
        });

        console.log(res)
        if (res.status == 200) {
            setDevs(devs.filter( (dev) => dev._id !== devId));
        } else {
            console.log(res.data);
        }

    }


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
                    {devs.map((dev) => <li key={dev._id}><DevCard dev={dev}/>
                        <div className='like-dislike'>
                            <button type='button' onClick={() => dislikeButton(dev._id)}><img src={dislike} alt='dislike'/></button>
                            <button type='button' onClick={() => likeButton(dev._id)}><img src={like} alt='like'/></button>
                        </div>   
                    </li>)}
            </ul>

        </div>
        </>
    );
} 