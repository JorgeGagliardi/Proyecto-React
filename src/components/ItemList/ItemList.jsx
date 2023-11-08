import {Link} from "react-router-dom";
import "./style.css";

import Item from "../Item/Item";

const ItemList = ({productList}) => {
  return (
    <div className="item-list-container">
      {productList.map((product) => (
        <div key={product.id}>
          <Item
            title={product.categoria}
            description={product.nombre}
            price={product.precio}
            image={product.imagen}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;