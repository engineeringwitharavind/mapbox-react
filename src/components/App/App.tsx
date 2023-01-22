import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import AddLocation from "../AddLocation/AddLocation";

export const MAPBOX_TOKEN = "";

function App() {
  return (
    <div className="App">
      <AddLocation />
    </div>
  );
}

export default App;
