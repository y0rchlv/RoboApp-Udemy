import React from 'react';
import './Card.css'

const Card = ({ name, username, email, id }) => {
    return(
        <div className='bg-black-60 dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='Foto de perfil' src= {`https://robohash.org/${id}?200x200`} />
            <div className='light-yellow'>
                <h2>Name: {name}</h2>
                <h3>User: {username}</h3>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}

export default Card;