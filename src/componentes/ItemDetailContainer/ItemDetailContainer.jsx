import React from 'react'
import {useState, useEffect} from 'react'
import { getVerProductos } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(()=>{
        getVerProductos(1)
        .then (respuesta => setProducto(respuesta))
    },[])

  return (
  <div>
    <ItemDetail {...producto}></ItemDetail>
  </div>
  )
}

export default ItemDetailContainer