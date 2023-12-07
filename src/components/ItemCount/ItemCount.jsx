import {useState} from "react";

const ItemCount = ({stock, cantidad, onAdd, onSubtract, agregarCarrito}) => {

  return (
    <div>
      <div className="cantidad">
        <div>
          <p>Cantidad:</p>
        </div>
        <div className="item-count">
          <button onClick={onSubtract}>-</button>
          <span>{cantidad}</span>
          <button onClick={onAdd}>+</button>
        </div>
        <div>
          <p>(Disponible: {stock} )</p>
        </div>
      </div>
      <button className="agregar-al-carrito" onClick={agregarCarrito}>Agregar al carrito</button>
    </div>

  );
};

export default ItemCount