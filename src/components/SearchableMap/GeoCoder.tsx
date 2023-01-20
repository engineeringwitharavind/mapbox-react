import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { MAPBOX_TOKEN } from "../App/App";

function Geocoder() {
  const ctrl = new MapBoxGeocoder({
    accessToken: MAPBOX_TOKEN,
    marker: false,
    collapsed: true,
  });

  useControl(() => ctrl);

  ctrl.on("result", (event) => {
    const coords = event.result.geometry.coordinates;
    console.log("Geocoder", coords);
  });

  return null;
}

export default Geocoder;
