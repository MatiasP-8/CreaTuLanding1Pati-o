import React, { useEffect, useState } from 'react';
import { getProductos } from "../../asyncmock";
import ItemList from '../ItemList/ItemList';
import './itemContianer.css'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta)) 
      .catch(error => console.log(error)); 
  }, []);

  return (
    <div className='container'>
      <h2>PRODUCTOS</h2>
      <ItemList productos={productos}> </ItemList>
    </div>
  );
};

export default ItemListContainer 