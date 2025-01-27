import React from "react";
import './item.css'

const Item = ({id,imagen,nombre,precio }) => {
  return (
    <div>
      <img src={imagen} alt={nombre} />
      <p>Id: {id}</p>
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio}</p>
      <button className="buttonDetalle">Ver Detalle</button>
    </div>
  );
};

export default Item;