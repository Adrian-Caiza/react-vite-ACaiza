import PersonalData from "./components/PersonalData";
import StudiesList from "./components/StudiesList";
import ToolsList from "./components/ToolsList";
import SportsGallery from "./components/SportsGallery";
import Formulario from "./components/Formulario";
import FormularioR from "./components/FormularioR";
import Taller from "./components/Taller"
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Mi página de usuario</h1>
      <PersonalData />
      <StudiesList />
      <ToolsList />
      <SportsGallery />
      <div>
      <h2>Opción 1: Comentarios</h2>
      <Formulario />
      </div>
      <div>
      <h2>Opción 2: Registro</h2>
      <FormularioR />
      </div>
      <div>
      <h2>Taller: Formulario</h2>
      <Taller />
      </div>
    </div>
    
  );
}

export default App;
