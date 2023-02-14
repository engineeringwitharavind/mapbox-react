import { useState, useCallback } from "react";
import Map from "react-map-gl";
import { MAPBOX_TOKEN } from "../App/App";
import DrawControl from "./DrawControl";

interface Feature {
  id: string;
}

interface Features {
  [key: string]: Feature;
}

function PlotMap() {
  const [, setFeatures] = useState({});

  const onUpdate = useCallback((e: { features: any }) => {
    setFeatures((currFeatures: Features) => {
      const newFeatures: Features = { ...currFeatures };
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback((e: { features: any }) => {
    setFeatures((currFeatures: Features) => {
      const newFeatures: Features = { ...currFeatures };
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: -91.874,
        latitude: 42.76,
        zoom: 12,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: 700, height: 500 }}
    >
      <DrawControl
        position="top-left"
        displayControlsDefault={false}
        controls={{
          polygon: true,
          trash: true,
        }}
        defaultMode="draw_polygon"
        onCreate={onUpdate}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </Map>
  );
}

export default PlotMap;
