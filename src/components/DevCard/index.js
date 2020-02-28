import React from 'react';

import './styles.css';

import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

export default function DevCard(props){
    const { avatar, name, bio } = props;
    return(
        <div className='dev-card'>
            <div className='dev-card-info'>
                <img src={avatar} alt={name}/>
                <footer>
                    <strong>{name}</strong>
                    <p>{bio}</p>
                </footer>
            </div>
            <div className='like-dislike'>
                <button type='button'><img src={dislike} alt='dislike'/></button>
                <button type='button'><img src={like} alt='like'/></button>
            </div>
        </div>
    );
}