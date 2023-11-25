import {Link} from "react-router-dom";
import "./style.css";

import Item from "../Item/Item";

const ItemList = ({productsL}) => {
  return (
    <div className="item-list-container">
      {productsL?.map((product) => (
        <div key={product.id}>
          <Link to={"/item/" + product.id}>
          <Item
            title={product.categoria}
            description={product.nombre}
            price={product.precio}
            image={product.imagen}
          />
        </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;