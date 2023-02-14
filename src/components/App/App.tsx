import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import PlotMap from "../SearchableMap/PlotMap";

export const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYXJhdmluZC1reXJvIiwiYSI6ImNsZDhobXBnOTAwNXUzbm53cjBrNG9hcmsifQ.UqTaW425cc4HhwpV_fQ82g";

function App() {
  return (
    <div className="App">
      <PlotMap />
    </div>
  );
}

export default App;
