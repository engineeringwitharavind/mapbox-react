import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";

export const MAPBOX_TOKEN = "";

function App() {
  return (
    <div className="App">
      <AutocompleteSearch />
    </div>
  );
}

export default App;
