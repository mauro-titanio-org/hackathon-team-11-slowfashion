import { Grid, Text } from "@nextui-org/react";
import { useState } from "react";
import Slide from "../../components/slide";
import FirstSlide from "../../components/slides/firstSlide";
import firstSlideBackgroundImage from "../../assets/png/firstslide_bg.png";
import OtherSlide from "../../components/slides/othersSlides";
import DidYouKnowSection from "./sections/didyouknow";
import SustainableSection from "./sections/sustainabletransformation";

export default function Home() {
  const [slides, setSlides] = useState([
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
  ]);
  return (
    <>
      <Grid.Container
        style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}
        justify='flex-end'>
        {slides.map((slide, i) => (
          <>
            <Slide
              i={i}
              key={`key-${i}`}
              backgroundColor={slide.color}
              backgroundImage={slide.bg_image}
              title={slide.title}
              initialWidth={slide.active ? 1 : 0}
              setSlides={setSlides}
              slides={slides}
              content={slide.content}
            />
          </>
        ))}
      </Grid.Container>
      <DidYouKnowSection />
      <SustainableSection/>
    </>
  );
}
