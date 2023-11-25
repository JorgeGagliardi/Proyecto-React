import "./style.css";

const Item = ({title, description, price, image}) => {
  return (
    <div className="card-container">
      <h3 className="leyendas">{title}</h3>
      <img src={image} alt={title} width={120}/>
      <p className="leyendasPie">{description}</p>
      <p className="leyendasPie">$ {price}</p>
    </div>
  );
};

export default Item