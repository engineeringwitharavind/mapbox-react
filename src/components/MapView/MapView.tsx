import React from "react";
import Map, { Marker } from "react-map-gl";
import { MAPBOX_TOKEN } from "../App/App";
import "./MapView.css";

function MapView() {
  const [viewport, setViewport] = React.useState({
    latitude: 0,
    longitude: 0,
    zoom: 14,
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 14,
      });
    });
  }, [viewport]);

  return (
    <React.Fragment>
      {viewport.latitude && viewport.longitude && (
        <Map
          mapboxAccessToken={MAPBOX_TOKEN}
          style={{ width: 700, height: 500 }}
          initialViewState={viewport}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker longitude={viewport.longitude} latitude={viewport.latitude} />
        </Map>
      )}
    </React.Fragment>
  );
}
export default MapView;
