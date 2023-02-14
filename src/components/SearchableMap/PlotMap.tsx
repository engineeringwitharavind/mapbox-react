import { useState, useRef } from "react";
import Map, { Source, Layer, MapboxMap } from "react-map-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { MAPBOX_TOKEN } from "../App/App";

const DrawPolygonMap = () => {
  const mapRef = useRef<MapboxMap | null>(null);

  const [features, setFeatures] = useState<any>({
    type: "FeatureCollection",
    features: [],
  });
  const drawRef = useRef<any>(null);

  const onDrawCreateOrUpdate = () => {
    const data = drawRef.current.getAll();
    setFeatures(data);
    if (data.features.length) {
      const coordinates = data.features[0].geometry.coordinates;
      console.log("[PlotMap.onDrawCreateOrUpdate().coordinates]", coordinates);
    }
  };

  return (
    <Map
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: -91.874,
        latitude: 42.76,
        zoom: 12,
      }}
      style={{ width: 700, height: 500 }}
      ref={(ref) => {
        if (ref && !mapRef.current) {
          mapRef.current = ref.getMap();
          drawRef.current = new MapboxDraw({
            displayControlsDefault: false,
            controls: {
              polygon: true,
              trash: true,
            },
          });
          mapRef.current.addControl(drawRef.current, "top-left");
          mapRef.current.on("draw.create", onDrawCreateOrUpdate);
          mapRef.current.on("draw.delete", onDrawCreateOrUpdate);
          mapRef.current.on("draw.update", onDrawCreateOrUpdate);
        }
      }}
    >
      <Source id="draw-polygon" type="geojson" data={features}>
        <Layer
          id="draw-polygon-fill"
          type="fill"
          paint={{
            "fill-color": "#088",
            "fill-opacity": 0.4,
          }}
        />
        <Layer
          id="draw-polygon-stroke"
          type="line"
          paint={{
            "line-color": "#088",
            "line-width": 2,
          }}
        />
      </Source>
    </Map>
  );
};

export default DrawPolygonMap;
