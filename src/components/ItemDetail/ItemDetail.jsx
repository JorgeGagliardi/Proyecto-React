import "./style.css";

const ItemDetail = ({ itemSelected }) => {
return (
    <div>
        <h6 className="card-title">{itemSelected?.nombre}</h6>
        <img src={itemSelected?.image} alt={itemSelected?.alt} width={70} />
        <div className="card-description">
            <p>{itemSelected?.detalle}</p>
        </div>

        <p>{itemSelected?.precio}</p>
    </div>
);
};

export default ItemDetail


