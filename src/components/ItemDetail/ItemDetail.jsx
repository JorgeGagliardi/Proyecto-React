import "./style.css";


const ItemDetail = ({title, nombre, price, alt, image, detalle}) => {
    return (
      <div>
        <div>
          <img src={image} alt={alt} width={240}/>
        </div>
        <h3 className="card-title">{nombre}</h3>
        <h3 className="card-title">$ {price}</h3>
        <div>
          <p className="card-title">{detalle}</p>
        </div>
      </div>
    );
  };

export default ItemDetail


