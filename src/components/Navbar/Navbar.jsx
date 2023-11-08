import "./style.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return  (
        <div>
            <div>
                <img alt="logo Espacio Jardín" src={`./img/logo.jpg`}/>
            </div>
            <nav>
                <ul className="list-container">
                    <li className="navbar-texto">
                        <Link to={"/categoria/plantas"} className="category-button">
                        Plantas
                        </Link>
                    </li>
                    <li className="navbar-texto">
                        <Link to={"/categoria/accesorios"} className="category-button">
                            Accesorios
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;