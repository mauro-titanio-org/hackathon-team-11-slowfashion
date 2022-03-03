import { createTheme } from "@nextui-org/react";

export const myLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // generic colors
      white: "#ffffff",
      black: "#000000",
      primary: "#5285EC",
      secondary: "#ffffff",

      successLight: "$green200", // $green600 on dark mode
      success: "$green500",
      successDark: "$green600",
      successShadow: "$green100", // $green600 on dark mode

      warningLight: "$yellow200", // $yellow600 on dark mode
      warning: "$yellow500",
      warningDark: "$yellow600",
      warningShadow: "$yellow100", // $yellow600 on dark mode

      errorLight: "$red200", // $red600 on dark mode
      error: "$red500",
      errorDark: "$red600",
      errorShadow: "$red100", // $red600 on dark mode

      // ... rest of colors
    },
  },
  space: {},
  fonts: {},
});
