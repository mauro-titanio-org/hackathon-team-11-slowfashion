import { Grid, Text } from "@nextui-org/react";

export default function Slide({
  backgroundColor,
  backgroundImage,
  initialWidth,
  setSlides,
  i,
  slides,
  title,
  content,
}) {
  const handleClick = () => {
    setSlides(
      slides.map((slide, index) => {
        if (i === index) {
          return {
            ...slide,
            active: true,
          };
        } else {
          return {
            ...slide,
            active: false,
          };
        }
      })
    );
  };
  console.log(title);
  return (
    <>
      <Grid
        xs
        style={{
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: backgroundColor,
          flexGrow: initialWidth,
          minWidth: 78,
          transition: "all 500ms ease-in-out",
          transitionDelay: initialWidth === 1 ? "200ms" : 0,
        }}
        onClick={() => handleClick()}>
        <Text
          color='white'
          size={18}
          style={{
            position: "absolute",
            fontWeight: "bolder",
            top: "98vh",
            width: "100%",
            height: "100%",
            transform: "rotate(270deg) translateX(35px) translateY(21px)",
            textTransform: "uppercase",
            transformOrigin: "top left",
            zIndex: 2000,
            display: "block",
          }}>
          {title}
        </Text>
        {initialWidth === 1 && content}
      </Grid>
    </>
  );
}
