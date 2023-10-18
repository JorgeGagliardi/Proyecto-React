import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Acá van los artículos de la tienda" />
    </div>
    );
}

export default App;