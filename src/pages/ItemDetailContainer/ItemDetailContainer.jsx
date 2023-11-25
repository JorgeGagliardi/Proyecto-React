import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {productList} from "../../data/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        const productSelected = productList.find((product) => {
            return product.id === id;
        });
        setProduct(productSelected)
    }, [id]);
return (
    <div>
        <ItemDetail 
        title={product.categoria}
        nombre={product.nombre}
        price={product.precio}
        alt={product.alt}
        image={product.imagen}
        detalle={product.detalle}
        />
    </div>
);
};

export default ItemDetailContainer