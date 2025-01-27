import React from 'react';
import Item from '../Item/item'
import './itemList.css'

const ItemList = ({ productos }) => {
  return (
    <div className='containerProductos'>
      {productos.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;
