import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

    return (
            <div>
                <Link className="category-button" to="/carrito">Carrito <span>{cantidadEnCarrito()}</span></Link>;
            </div>
    )
}

export default CartWidget;
