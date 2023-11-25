import "./style.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import {useParams} from "react-router-dom";
import {productList} from "../../data/products";
import {useEffect, useState} from "react";

const ItemListContainer = () => {
    const {id} = useParams();

    const [productsView, setProductsView] = useState();

    useEffect ( () => {
        setProductsView(productList);
        if (id) {
            const filteredProducts = productList.filter((product) => {
                return product.categoria === id;
            });
            setProductsView(filteredProducts);
        } else {
            setProductsView(productList);
        }
    }, [id]);

    return (
    <div>
        <h1 className="titulo-texto">Tienda</h1>
        <ItemCount/>
        <ItemList productsL={productsView} />
    </div>
    );
};

export default ItemListContainer
