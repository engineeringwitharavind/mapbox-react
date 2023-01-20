import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import SearchableMap from "../SearchableMap/SearchableMap";

export const MAPBOX_TOKEN = "";

function App() {
  return (
    <div className="App">
      <SearchableMap />
    </div>
  );
}

export default App;
