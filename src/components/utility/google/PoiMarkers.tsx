import { useEffect, useRef, useState, useCallback } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { Poi } from "@/config/poi";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import type { Marker } from "@googlemaps/markerclusterer";
import SvgPin from "./SvgPin";

interface PoiMarkersProps {
  pois: Poi[];
  onPoiClick?: (poi: Poi) => void;
}

export function PoiMarkers({ pois, onPoiClick }: PoiMarkersProps) {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {pois.map((poi: Poi) => (
        <div key={poi.key}>
          <AdvancedMarker
            key={poi.key}
            position={poi.location}
            ref={(marker) => setMarkerRef(marker, poi.key)}
            onClick={() => onPoiClick?.(poi)}
          >
            <a href={"#" + poi.key}>
              <SvgPin />
            </a>
          </AdvancedMarker>
        </div>
      ))}
    </>
  );
}
