import { NextUIProvider } from "@nextui-org/react";
import { myLightTheme } from "./theme/theme";
import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <NextUIProvider theme={myLightTheme}>
        <Navbar />
        <Home />
      </NextUIProvider>
    </>
  );
}

export default App;
