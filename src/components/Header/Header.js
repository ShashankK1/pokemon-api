import React from 'react'
import './Header.css'
import pokemon_icon from '../../Assets/images/poke-icon.png';
const Header = () => {
  return (
    <div className='header'>
        <div className='image'>
            <img src={pokemon_icon} alt="poke-icon"/>
        </div>
        <div className='heading'>
            
        </div>
        <div className='input'>
            <input type="text" placeholder='Search'/>
        </div>
    </div>
  )
}

export default Header