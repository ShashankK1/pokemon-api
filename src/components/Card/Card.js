import React from 'react'
import './Card.css'
import empty from '../../Assets/images/empty.png'
const Card = ({ image_url_front, image_url_back, name, height, weight }) => {
    const emptyStyleFront = {
        width: '60px',
        height:'80px',
        transform:"scaleX(-1)"
    }
    const emptyStyleBack = {
        width: '60px',
        height:'80px'
    }
    return (
        <div className='card'>
            <div className='img-container'>
                {(image_url_front!== null)
                ?<img src={image_url_front} alt="front" />
                :<img style={emptyStyleFront} src={empty} alt="pokeball"/>}
                {(image_url_back!== null)
                ?<img src={image_url_back} alt="back" />
                :<img style={emptyStyleBack} src={empty} alt="pokeball"/>}
                
            </div>
            <div className='poke-name'><strong>{name.toUpperCase()}</strong></div>
            <div className='stats'>
                    <strong>Height : {height}</strong>
                    <strong>Weight : {weight}</strong>
            </div>
        </div>
    )
}

export default Card