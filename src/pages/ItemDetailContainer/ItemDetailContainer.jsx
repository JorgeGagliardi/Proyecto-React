import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
        
return (
    <div>
        <ItemDetail itemSelect={id}/>
    </div>
);
};

export default ItemDetailContainer