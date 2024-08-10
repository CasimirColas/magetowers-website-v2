import { link } from "fs";

export type Poi = {
  key: string;
  location: google.maps.LatLngLiteral;
  name: string;
  image: string;
  address: string;
  link: string;
  website?: string;
  phone?: string;
  booking?: string;
};
export const locations: Poi[] = [
  {
    key: "lesGrandsGamins",
    location: { lat: 48.86805471104878, lng: 2.3460906269852333 },
    name: "Les Grands Gamins",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMFJqH7D3N4fwA82xUIbHsEKNuPmycVCnE-Hvgf=w408-h272-k-no",
    address: "19 Rue de Cléry, 75002 Paris",
    link: "https://maps.app.goo.gl/NnoLDWzjVEZNK8Ze8",
    website: "https://lesgrandsgaminsparis.fr/",
    phone: "0677602133",
  },
  {
    key: "theGoodGame",
    location: { lat: 48.86916940417162, lng: 2.350106932536917 },
    name: "The Good Game",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipP0gYQZuOLeTo1TaZrFMoWo6VjPHekhsfnO4qHp=w408-h272-k-no",
    address: "78 Rue de Cléry, 75002 Paris",
    link: "https://maps.app.goo.gl/yrWAmBV97hAaCysPA",
    website: "https://goodgameparis.fr/",
    phone: "0987454916",
    booking: "https://goodgameparis.fr/reservation/",
  },
  {
    key: "dernierBarAvantLaFinDuMonde",
    location: { lat: 48.85799988557539, lng: 2.346337466268458 },
    name: "Dernier Bar Avant La Fin Du Monde",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNgQTvScCs-H0lfLFyXzE4SUhhESLz9dFB2JVok=w203-h152-k-no",
    address: "19 Av. Victoria, 75001 Paris",
    link: "https://maps.app.goo.gl/dpgmnMdpRnjQ7MGf6",
    website: "http://www.dernierbar.com/",
    phone: "0153009895",
  },
  {
    key: "lesMauvaisJoueursAusterlitz",
    location: { lat: 48.83724227305054, lng: 2.372600982806261 },
    name: "Les Mauvais Joueurs - Austerlitz",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMFybQdj_0eOaeCM155nd2Q64pECmSyxa9MY2L5=w408-h408-k-no",
    address: "12 Bd Vincent Auriol, 75013 Paris",
    link: "https://maps.app.goo.gl/XChz3zNE7hJpBbEw5",
    website: "https://www.lesmauvaisjoueurs.com/",
    phone: "0645293093",
  },
  {
    key: "laRevanche",
    location: { lat: 48.84678104589136, lng: 2.3761221951042524 },
    name: "La Revanche",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOaubICnYO-ADSbKUQR_2OqWgBBf_xPbPwWvFFB=w408-h272-k-no",
    address: "38 Av. Daumesnil, 75012 Paris",
    link: "https://maps.app.goo.gl/8nZTjsV28aQqtVTF6",
    website: "https://www.larevanche-bistrotludique.com/",
    phone: "0638149009",
    booking: "https://bookings.zenchef.com/results?rid=357616",
  },
  {
    key: "leNidCoconLudique",
    location: { lat: 48.864494868237074, lng: 2.353022062799483 },
    name: "Le Nid - Cocon Ludique",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipMlSk1ARnJqyZd5fz_pOZDRpPXoF6NVtp0gdGUk=w408-h408-k-no",
    address: "227 Rue Saint-Martin, 75003 Paris",
    link: "https://maps.app.goo.gl/8PfDtvLNpwVrmpDG8",
    website: "http://lenid-coconludique.com/",
    phone: "0782752300",
    booking: "https://bookings.zenchef.com/results?rid=357605",
  },
  {
    key: "barakaJeux",
    location: { lat: 48.58385688792406, lng: 7.744079996805419 },
    name: "Baraka'Jeux",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOiNRRWS2dBEJt2fMeL3zE56koTBUPMbz1mAqBC=w408-h272-k-no",
    address: "6 Pl. de l'Homme de Fer, 67000 Strasbourg",
    link: "https://maps.app.goo.gl/qEnnEKQgYQMuQxn7A",
    website: "https://www.barakajeuxstrasbourg.fr/",
    phone: "0390231816",
  },
  {
    key: "philibar",
    location: { lat: 48.58593430800531, lng: 7.7407045950749405 },
    name: "Philibar",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNTQWvkeW5JCi-b3oXzL11Gq4eqG5mx3OJgOykN=w408-h272-k-no",
    address: "15 Rue du Marais-Vert, 67000 Strasbourg",
    link: "https://maps.app.goo.gl/jcmWSgrAPxLQEyxQ7",
    website: "https://www.philibar.net/#carte",
    phone: "0390403339",
    booking: "https://www.schlouk-map.com/fr/places/philibar",
  },
];
