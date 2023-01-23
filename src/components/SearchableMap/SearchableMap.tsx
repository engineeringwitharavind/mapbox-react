import React, { useState, useCallback } from "react";
import Map, {
  LngLat,
  Marker,
  MarkerDragEvent,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import { MAPBOX_TOKEN } from "../App/App";
import Geocoder from "./GeoCoder";

function SearchableMap() {
  const [marker, setMarker] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 14,
  });
  const [, logEvents] = useState<Record<string, LngLat>>({});

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((event) => {
      setMarker({
        ...marker,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        zoom: 14,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback(
    (event: MarkerDragEvent) => {
      logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
      console.log("onMarkerDrag.longitude", event.lngLat.lng);
      console.log("onMarkerDrag.latitude", event.lngLat.lat);

      setMarker({
        ...marker,
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat,
        zoom: 14,
      });
    },
    [marker]
  );

  const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
  }, []);

  return (
    <>
      {marker.latitude && marker.longitude && (
        <Map
          initialViewState={marker}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={MAPBOX_TOKEN}
          style={{ width: 700, height: 500 }}
        >
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            draggable
            onDragStart={onMarkerDragStart}
            onDrag={onMarkerDrag}
            onDragEnd={onMarkerDragEnd}
          ></Marker>
          <NavigationControl position="bottom-right" />
          <GeolocateControl
            trackUserLocation
            position="bottom-right"
            onGeolocate={(event) =>
              setMarker({
                ...marker,
                longitude: event.coords.longitude,
                latitude: event.coords.latitude,
                zoom: 14,
              })
            }
          />
          <Geocoder />
        </Map>
      )}
    </>
  );
}

export default SearchableMap;
