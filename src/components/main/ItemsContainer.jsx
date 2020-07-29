import React from 'react';
import ItemsProyectos from './proyectos/Item'
import '../../assets/styles/components/ItemsContainer.scss';

const ItemsContainer = () =>(
    <div className='proyectos'>
        < ItemsProyectos />
        < ItemsProyectos />
        < ItemsProyectos />
    </div>
);

export default ItemsContainer;