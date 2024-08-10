import type { Poi } from "@/config/poi";
import clsx from "clsx";
import { Globe, MapPin, NotebookPen, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
interface PoiCardProps {
  poi: Poi;
  focused?: boolean;
  onClick?: () => void;
}

const hoverStyle = "hover:text-tile hover:font-semibold w-fit";

function PoiCard({ poi, focused, onClick }: PoiCardProps) {
  const t = useTranslations("map");
  return (
    <div
      className={clsx(
        "p-2 border rounded-lg mx-2 my-4 sm:m-4 max-h-48 sm:max-h-min cursor-pointer hover:shadow-lg sm:hover:scale-105 transition-transform",
        {
          "border-sky-400": focused,
        }
      )}
      id={poi.key}
      onClick={onClick}
    >
      <img
        src={poi.image}
        alt={poi.name}
        className="rounded-t-md border-b w-full object-cover object-center max-h-10 sm:max-h-20"
      />
      <h3 className="text-xl font-semibold border-b mb-1">{poi.name}</h3>
      <p>{poi.address}</p>
      <div className="sm:flex flex-col hidden">
        {poi.phone && (
          <a target="_blank" href={`tel:${poi.phone}`} className={hoverStyle}>
            {"+33" + poi.phone.slice(1)}
          </a>
        )}
        <a target="_blank" href={poi.link} className={hoverStyle}>
          {t("inGoogleMaps")}
        </a>
        {poi.website && (
          <a target="_blank" href={poi.website} className={hoverStyle}>
            {t("website")}
          </a>
        )}
        {poi.booking && (
          <a target="_blank" href={poi.booking} className={hoverStyle}>
            {t("book")}
          </a>
        )}
      </div>
      <div className="flex sm:hidden p-2 gap-2 justify-start">
        {poi.phone && (
          <a target="_blank" href={`tel:${poi.phone}`} className={hoverStyle}>
            <Phone />
          </a>
        )}
        <a target="_blank" href={poi.link} className={hoverStyle}>
          <MapPin />
        </a>
        {poi.website && (
          <a target="_blank" href={poi.website} className={hoverStyle}>
            <Globe />
          </a>
        )}
        {poi.booking && (
          <a target="_blank" href={poi.booking} className={hoverStyle}>
            <NotebookPen />
          </a>
        )}
      </div>
    </div>
  );
}

export default PoiCard;
