import React from "react";
import './item.css'

const Item = ({id,imagen,titulo,precio }) => {
  return (
    <div>
      <img src={imagen} alt={titulo} />
      <p>Id: {id}</p>
      <p> {titulo}</p>
      <p>Precio: {precio}</p>
      <button className="buttonDetalle">Ver Detalle</button>
    </div>
  );
};

export default Item;