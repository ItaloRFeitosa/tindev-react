import React from 'react';

import './styles.css';



export default function DevCard(props){
    const { avatar, name, bio } = props.dev;
    return(
            <div className='dev-card-info'>
                <img src={avatar} alt={name}/>
                <footer>
                    <strong>{name}</strong>
                    <p>{bio}</p>
                </footer>
            </div>
            
    );
}