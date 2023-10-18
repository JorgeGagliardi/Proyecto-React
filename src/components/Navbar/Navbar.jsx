import "./style.css";
import { Button } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return  (
        <div className="navbar-container">
            <div>
                <img alt="logo Espacio Jardín" src={`./img/logo.jpg`}/>
            </div>
            <div>
                <ul className="list-container">
                    <li><button className="category-button">Plantas</button></li>
                    <li><button className="category-button">Accesorios</button></li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    );
};
export default Navbar;