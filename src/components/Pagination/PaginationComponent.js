import React, { useState } from 'react'
import './PaginationComponent.css'
import { Pagination } from '@mantine/core'
const PaginationComponent = (props) => {
    const count = parseInt(Math.ceil(props.count/10));
    const [activePage, setActivePage] = useState(1);
    const changeHandler = (e)=>{
        setActivePage(e);
        props.changeHandler(e);
    }
    
    return (
        <div className='pagination'>
            <Pagination 
            total={count} siblings={1} initialPage={10} 
            className="mantine-pagination"
            page={activePage}
            onChange={(e)=>{changeHandler(e)}}
            />
        </div>
    )
}

export default PaginationComponent