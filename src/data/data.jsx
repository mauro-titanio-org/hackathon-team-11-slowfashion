import FirstSlide from "../components/slides/firstSlide";
import OtherSlide from "../components/slides/othersSlides";
import firstSlideBackgroundImage from "../assets/png/firstslide_bg.png";
import twothirds_logo from "../assets/png/logos/twothirds_logo.png";
import alohas_logo from '../assets/png/logos/alohas_logo.png'
import ecoalf_logo from '../assets/png/logos/ecoalf_logo.png'

export const slidesContents = [
  {
    active: true,
    color: "#fff",
    title: "",
    bg_image: `url(${firstSlideBackgroundImage})`,
    content: <FirstSlide />,
  },
  {
    active: false,
    color: "#CFDCF4",
    title: "Our mission",
    content: <OtherSlide text={"We are long lasting fashion activists."} />,
  },
  {
    active: false,
    color: "#83BDA3",
    title: "Impact",
    content: (
      <OtherSlide text={"Be part of the change. Every stitch counts."} />
    ),
  },
  {
    active: false,
    color: "#CDD4B5",
    title: "What's news",
    content: (
      <OtherSlide text={"Stay tuned about what we are planning out there."} />
    ),
  },
  {
    active: false,
    color: "#EC754A",
    title: "Brands",
    content: <OtherSlide text={"Brands that are doing things right."} />,
  },
  {
    active: false,
    color: "#F0DBDA",
    title: "Be in touch",
    content: <OtherSlide text={"Let's make synergies!"} />,
  },
];

export const BRANDS = [
  {
    name: "Two Thirds",
    description:
      "Sustainable clothing brand, designed in Barcelona and produced within Europe.",
    logo: twothirds_logo,
  },
  {
    name: "Alohas",
    description:
      "Sustainable production and responsible shopping to the forefront of the industry.",
    logo: alohas_logo,
  },
  {
    name: "Ecoalf",
    description:
      "The pioneers in sustainable fashion. Because there is no planet B®",
    logo: ecoalf_logo,
  },
  {
    name: "Ecoalf",
    description:
      "The pioneers in sustainable fashion. Because there is no planet B®",
    logo: ecoalf_logo,
  },
];
