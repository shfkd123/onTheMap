import { extendTheme } from "@chakra-ui/react";
import themeBtn from "./components/button";
import themeInput from "./components/input";

const theme = extendTheme({
  fonts: {
    body: `'Noto Sans KR', sans-serif`,
  },
  colors: {
    primary: "#268EFF",
    secondary: "rgba(0, 0, 0, 0.5)",
    dropShadow: "rgba(0, 0, 0, 0.25)",
    disabled: "rgba(0, 0, 0, 0.25)",
    systemRed: "#D70015",
  },
  components: {
    Button: themeBtn,
    Input: themeInput,
  },
});

export default theme;
