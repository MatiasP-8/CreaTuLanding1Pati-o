import React from "react";
import './ItemDetail.css'

const ItemDetail = ({id,titulo,precio,imagen}) =>{
    return(
        <div className="containerDetail">
            <h1>Detalle del Producto</h1>
            <img src={imagen} alt="" />
            <p>Id:{id}</p>
            <h2>Nombre:{titulo}</h2>
            <h3>Precio: {precio}</h3>
        </div>
    )
}

export default ItemDetail