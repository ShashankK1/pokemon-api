import React, { useState } from 'react'
import './Header.css'
import pokemon_icon from '../../Assets/images/poke-icon.png';
import searchIcon from '../../Assets/images/search.png';
const Header = (props) => {
  const [name, setName] = useState('');
  const changeHandler = (e) => {
    setName(e.target.value.trim());
  }
  const searchHandler = () => {
    props.handler(name.toLowerCase());
    setName('');
  }
  return (
    <div className='header'>
      <div className='image'>
        <img src={pokemon_icon} alt="poke-icon" />
      </div>
      <div className='heading'>

      </div>
      <div className='input'>
        <input style={(props.err.length>0)?{outline:'2px solid red'}:{}} type="text" placeholder='Search' value={name} onChange={(e) => { changeHandler(e) }} />
        <img src={searchIcon} alt="search" onClick={searchHandler} />
      </div>
    </div>
  )
}

export default Header