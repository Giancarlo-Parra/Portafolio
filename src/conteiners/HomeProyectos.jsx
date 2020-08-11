import React, { useState } from 'react';
import ItemsProyectos from '../components/Item'
import '../assets/styles/components/ItemsContainer.scss';
import items from '../data/items.json';



const ItemsContainer =()=>{
  const [data,setdata] = useState(items)
  
  return(
    <div className='proyectos home'>
      < ItemsProyectos data={data} />
    </div>
		
  );
}



export default ItemsContainer;