import "./style.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
    return (
    <div>
        <h1 className="titulo-texto">Tienda</h1>
        <ItemCount/>
        <ItemList productList={[
            { id: "1", categoria: "Plantas",    nombre: "Sedum maceta 40cm",              precio: "1200", cantidad:  1, imagen: "img/sedum.jpeg",           alt: "Sedum",                    detalle: "Arreglo floral con más de cincuenta plantas Sedum en una maceta de cemento pintada color barro de 40cm de diámetro"},
            { id: "2", categoria: "Plantas",    nombre: "Madre Perla maceta 40cm",        precio: "1050", cantidad:  1, imagen: "img/madrePerla.jpeg",      alt: "Madre Perla",              detalle: "Arreglo floral con más de cincuenta plantas Madre Perla en una maceta de cemento pintada color barro de 40cm de diámetro"},
            { id: "3", categoria: "Plantas",    nombre: "Cordón de San José maceta 40cm", precio: "1100", cantidad:  1, imagen: "img/cordonDeSanJose.jpeg", alt: "Cordón de San José",       detalle: "Arreglo floral con más de cincuenta plantas Cordón de San José en una maceta de cemento pintada color barro de 40cm de diámetro"},
            { id: "4", categoria: "Accesorios", nombre: "Rollo manguera 1/2 pulg, 25m",   precio: "9000", cantidad:  1, imagen: "img/rolloManguera.jpeg",   alt: "Rollo manguera",           detalle: "Rollo de manguera reforzada de media pulgada de diámetro y 25m de largo"},
            { id: "5", categoria: "Accesorios", nombre: "Fertilizante para cesped"  ,     precio: "3500", cantidad:  1, imagen: "img/fertilizante.jpeg",    alt: "Fertilizante Terrafertil", detalle: "Fertilizante sólido Terrafertil. Fosfato diamónico. Favorece el desarrollo aéreo y radicular. Ideal para césped, florales, frutales, hortalizas y forestales. Pero 1 kg"}
        ]}/>
    </div>
    );
};

export default ItemListContainer
