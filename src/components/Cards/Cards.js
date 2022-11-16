import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
const Cards = ({props}) => {
    // console.log(props);
    const cardItems = props.map(item=>{
        return <Card 
        key={item.info.id}
        id={item.info.id}
        name={item.name} 
        image_url_front={item.info.sprites.front_default}
        image_url_back={item.info.sprites.back_default}
        height={item.info.height}
        weight={item.info.weight}/>
    })
    return (
    <div className='cards'>
        {cardItems}
    </div>
  )
}

export default Cards