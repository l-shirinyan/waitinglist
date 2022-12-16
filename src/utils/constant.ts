import { ReactComponent as CopyIcon } from "../assets/icons/copy.svg";
import { ReactComponent as TelIcon } from "../assets/icons/tel.svg";
import { ReactComponent as WhatsAppIcon } from "../assets/icons/w-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/i-icon.svg";
import { ReactComponent as SnapIcon } from "../assets/icons/snap-icon.svg";
import { ReactComponent as TikTokIcon } from "../assets/icons/t-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twiter-icon.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";
import { ReactComponent as CarIcon } from "../assets/icons/car.svg";

export const navigation = [
  {
    title: "Chinese",
    link: "/",
  },
  {
    title: "Mexican",
    link: "#",
  },
  {
    title: "Salads",
    link: "#",
  },
  {
    title: "Appetizers",
    link: "#",
  },
];

export const terms = [
  {
    title: "Simply dummy text of the printing and typesetting industry.",
  },
  {
    title:
      "established fact that a reader will be distracted by the readable content of a page",
  },
  {
    title:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
  {
    title:
      "desktop publishing packages and web page editors now use Lorem Ipsum",
  },
  {
    title:
      "passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    title: 'Latin professor at Hampden-Sydney College in Virginia",',
  },
];


export const resturantIcons = [
  CopyIcon,
  TelIcon,
  WhatsAppIcon,
  InstagramIcon,
  SnapIcon,
  TikTokIcon,
  TwitterIcon,
  LocationIcon,
  StarIcon,
  CarIcon,
];

export const TERMS_URL = process.env.REACT_APP_TERMS_URL;
export const SEATING_URL = process.env.REACT_APP_SEATINGS_URL;
export const QUEUE_URL= process.env.REACT_APP_QUEUE_URL