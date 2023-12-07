import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        const productosRef = collection(db, "productos");
        getDocs(productosRef)
        .then((resp) => {
        const productSelected = resp.docs.map((doc) => {return { ...doc.data(), id: doc.id }}).find((product) => {
            return product.id === id;
        });
        setProduct(productSelected)
    })
    }, [id]);
return (
    <div>
        <h1 className="titulo-texto">Tienda</h1>
        <ItemDetail product={product} />
    </div>
);
};

export default ItemDetailContainer