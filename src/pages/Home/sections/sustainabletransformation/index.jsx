import { Grid, Text, Container } from "@nextui-org/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import image from "../../../../assets/png/uns_2.png";

export default function SustainableSection() {
  const textVariants = {
    visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
    hidden: { opacity: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <Grid.Container justify='center'>
        <Grid
          xs={7}
          style={{
            backgroundColor: "#CFDCF4",
            paddingInline: "2%",
            paddingTop: "10%",
            paddingBottom: "10%",
          }}>
          <Container style={{padding: 0, margin:0}}>
            <motion.div
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={textVariants}>
              <Text h2 size={100} color='white'>
                We believe <br />in sustainable
                transformation of goods.{" "}
              </Text>
              <Text size={20} color='white'>
                SEE OUR MISSION
              </Text>
            </motion.div>
          </Container>
        </Grid>
        <Grid
          xs={5}
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: "100%",
            minHeight: "100%",
          }}></Grid>
      </Grid.Container>
    </>
  );
}
