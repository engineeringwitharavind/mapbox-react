import AutocompleteSearch from "../AutocompleteSearch/AutocompleteSearch";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import MapView from "../MapView/MapView";
import SearchableMap from "../SearchableMap/SearchableMap";

function App() {
  return (
    <div className="App">
      <AutocompleteSearch options={["option 1", "option 2"]} />
      <MapView />
      <SearchableMap />
    </div>
  );
}

export default App;
