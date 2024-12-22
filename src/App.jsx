import PersonalData from "./components/PersonalData";
import StudiesList from "./components/StudiesList";
import ToolsList from "./components/ToolsList";
import SportsGallery from "./components/SportsGallery";
import Formulario from "./components/Formulario";
import FormularioR from "./components/FormularioR";
import Taller from "./components/Taller";
import TareaFormulario from "./components/TareaFormulario"
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
      <Formulario />
      </div>
      <div>
      <FormularioR />
      </div>
      <div>
      <h2>Taller - React</h2>
      <Taller />
      </div>
      <div>
      <TareaFormulario />
      </div>
    </div>
    
  );
}

export default App;
