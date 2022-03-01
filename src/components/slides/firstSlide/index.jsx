import { Grid } from "@nextui-org/react";
import FirstSlideText from "../../../assets/svg/FirstSlideText";
import background from "../../../assets/png/firstslide_bg.png";

export default function FirstSlide() {
  return (
    <>
      <Grid.Container
        justify='center'
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}>
        <FirstSlideText />
      </Grid.Container>
    </>
  );
}
