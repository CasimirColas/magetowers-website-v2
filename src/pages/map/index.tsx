import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { PoiMarkers } from "@/components/utility/google/PoiMarkers";
import { locations, Poi } from "@/config/poi";
import PoiCard from "@/components/utility/google/PoiCard";
import { Button } from "@/components/ui/button";
import { MapIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const defaultCenter = { lat: 47, lng: 2.4 };
const defaultZoom = 4;

export default function MapPage() {
  const t = useTranslations("map");
  const [currentPoi, setCurrentPoi] = useState<Poi>();
  const map = useMap();
  function handlePoiClick(poi: Poi) {
    setCurrentPoi(poi);
    animateCenter(poi.location);
  }
  function animateCenter(newCenter: google.maps.LatLngLiteral) {
    const duration = 100; // Duration of the animation in milliseconds
    const start = performance.now();
    const initialCenter = currentPoi?.location ?? defaultCenter;

    const animate = (time: number) => {
      const elapsed = time - start;
      const t = Math.min(elapsed / duration, 1); // Normalize time to a value between 0 and 1

      const lat = initialCenter.lat + (newCenter.lat - initialCenter.lat) * t;
      const lng = initialCenter.lng + (newCenter.lng - initialCenter.lng) * t;

      map?.setCenter({ lat, lng });

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
  return (
    <DefaultLayout>
      <div className="h-full w-full items-center flex flex-col sm:flex-row">
        <div className="sm:aspect-video w-full h-[55%] sm:h-full">
          <Map
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
            defaultCenter={defaultCenter}
            defaultZoom={defaultZoom}
            mapTypeControl={false}
            fullscreenControl={false}
            streetViewControl={false}
          >
            <PoiMarkers
              pois={locations}
              onPoiClick={(poi) => handlePoiClick(poi)}
            />
          </Map>
        </div>
        <div className="sm:h-full flex flex-col h-[45%]">
          <div className="p-2 sm:p-4 border-b flex items-center gap-4">
            <Button
              variant={"outline"}
              onClick={() => {
                map?.setCenter(defaultCenter);
                map?.setZoom(defaultZoom);
              }}
              className="w-10 h-10 p-2"
            >
              <MapIcon />
            </Button>
            <h2 className="full font-semibold pr-2">{t("title")}</h2>
          </div>
          <div className="flex-grow overflow-auto sm:scroll-smooth">
            {locations.map((poi) => (
              <PoiCard
                key={poi.key}
                poi={poi}
                focused={poi.key === currentPoi?.key}
                onClick={() => {
                  handlePoiClick(poi);
                  map?.setZoom(18);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["map", "common"], locale);
}
