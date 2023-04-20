import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemsListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="contenedor">
      <NavBar /> 
      <ItemListContainer props="Aca van a estar los productos"/>  
    </div>
  );
}

export default App;
