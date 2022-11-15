import React from 'react'
import './Card.css'
const Card = ({ image_url_front, image_url_back, name }) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <img src={image_url_front} alt="front" />
                <img src={image_url_back} alt="back" />
            </div>
            <div className='poke-name'><strong>{name.toUpperCase()}</strong></div>
        </div>
    )
}

export default Card