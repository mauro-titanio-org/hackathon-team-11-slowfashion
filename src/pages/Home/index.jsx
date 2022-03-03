import { Grid } from "@nextui-org/react";
import { useState } from "react";
import Slide from "../../components/slide";
import DidYouKnowSection from "./sections/didyouknow";
import SustainableSection from "./sections/sustainabletransformation";
import { slidesContents } from "../../data/data";
import BrandsSection from "./sections/brands";


export default function Home() {
  const [slides, setSlides] = useState(slidesContents);
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
      <SustainableSection />
      <BrandsSection/>
    </>
  );
}
