import PersonalData from "./components/PersonalData";
import StudiesList from "./components/StudiesList";
import ToolsList from "./components/ToolsList";
import SportsGallery from "./components/SportsGallery";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Mi página de usuario</h1>
      <PersonalData />
      <StudiesList />
      <ToolsList />
      <SportsGallery />
    </div>
  );
}

export default App;
