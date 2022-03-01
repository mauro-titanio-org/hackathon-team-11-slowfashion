import { Container, Grid } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DidYouKnow from "../../../../assets/svg/DidYouKnow";

export default function DidYouKnowSection() {
  const textVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
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
      <Grid.Container
        justify='center'
        style={{ paddingTop: "8%", paddingBottom: "8%" }}>
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={textVariants}>
          <Container>
            <DidYouKnow />
          </Container>
        </motion.div>
      </Grid.Container>
    </>
  );
}
