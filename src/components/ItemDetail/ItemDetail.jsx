import "./style.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";


//const ItemDetail = ({title, nombre, price, alt, image, detalle, stock}) => {
  const ItemDetail = ({product}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);

    //const {user, edad} =useContext(CartContext);
    //console.log(edad);

  const  [cantidad, setCount] = useState(1);

  const onAdd = () => {
    if (cantidad===product.stock) return;
    setCount(cantidad + 1);
  };

  const onSubtract = () => {
    if (cantidad===1) return;
    setCount(cantidad - 1);
  };

    return (
      <div>
        <div className="descripcionProducto">
          <div>
            <img src={product.imagen} alt={product.alt} width={210}/>
          </div>
          <div>
            <p className="card-title-detalle">{product.detalle}</p>
          </div>
        </div>
        <div className="pieArticulo">
          <div>
            <h2 className="card-title">{product.nombre}</h2>
            <h2 className="card-title-price">$ {product.precio}</h2>
          </div>
          <div>
            <ItemCount stock={product.stock}
            cantidad={cantidad}
            onAdd={onAdd}
            onSubtract={onSubtract}
            agregarCarrito={() => {agregarAlCarrito(product, cantidad)}}/>
          </div>
        </div>
      </div>
    );
  };

export default ItemDetail


