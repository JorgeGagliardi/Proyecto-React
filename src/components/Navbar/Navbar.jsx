import CartWidget from "../CartWidGet/CartWidget";
import "./style.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return  (
        <div>
            <div>
                <Link to={"/"}>
                    <img alt="logo Espacio Jardín" src={`/img/logo.jpg`}/>
                </Link>
            </div>
            <nav>
                <ul className="list-container">
                    <li className="navbar-texto">
                        <Link to={"/categoria/Semillas"} className="category-button">
                        Semillas
                        </Link>
                    </li>
                    <li className="navbar-texto">
                        <Link to={"/categoria/Plantas"} className="category-button">
                        Plantas
                        </Link>
                    </li>
                    <li className="navbar-texto">
                        <Link to={"/categoria/Accesorios"} className="category-button">
                            Accesorios
                        </Link>
                    </li>
                    <li className="navbar-texto">
                        <Link to="/carrito" className="category-button">
                            <CartWidget/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;