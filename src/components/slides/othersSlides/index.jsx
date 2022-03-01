import { Grid, Text } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

export default function OtherSlide({ text }) {
  return (
    <>
      <Grid.Container
        justify='start'
        style={{ paddingTop: "20%", paddingInline: "10%" }}>
        <AnimatePresence>
          <motion.div
            transition={{ delay: 0.7 }}
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "block" }}
            exit={{ opacity: 0, display: "block" }}>
            <Text h1 color='white' size={120}>
              {text}
            </Text>
          </motion.div>
        </AnimatePresence>
      </Grid.Container>
    </>
  );
}
