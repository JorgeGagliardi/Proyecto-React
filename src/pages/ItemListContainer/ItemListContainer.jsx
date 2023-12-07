import "./style.css";
import ItemList from "../../components/ItemList/ItemList";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/config";
import { CartContext } from '../../context/CartContext';

const ItemListContainer = () => {
    const {id} = useParams();

    const [productsView, setProductsView] = useState();

    useEffect ( () => {

        const productosRef = collection(db, "productos");
        getDocs(productosRef)
            .then((resp) => {
                setProductsView(resp.docs.map((doc) => {return { ...doc.data(), id: doc.id }}));
                if (id) {
                    const filteredProducts = resp.docs.map((doc) => {return { ...doc.data(), id: doc.id }}).filter((product) => {
                        return product.categoria === id;
                    });
                    setProductsView(filteredProducts);
                } else {
                    setProductsView(resp.docs.map((doc) => {return { ...doc.data(), id: doc.id }}));
                }
            })
    }, [id]);

    return (
    <div>
        <h1 className="titulo-texto">Tienda</h1>
        <ItemList productsL={productsView} />
    </div>
    );
};

export default ItemListContainer
