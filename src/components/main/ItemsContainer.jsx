import React, { useState } from 'react';
import ItemsProyectos from './proyectos/Item'
import '../../assets/styles/components/ItemsContainer.scss';
import items from '../../sample/items.json';



const ItemsContainer =()=>{
    const [data,setdata] = useState(items)
    return(
    <div className='proyectos'>
        
        < ItemsProyectos data={data} />
    </div>
);
    }
   



export default ItemsContainer;