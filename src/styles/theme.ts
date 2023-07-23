import { extendTheme } from "@chakra-ui/react";
import themeBtn from "./components/button";

const theme = extendTheme({
  fonts: {
    body: `'Noto Sans KR', sans-serif`,
  },
  colors: {
    primary: "#268EFF",
    systemRed: "#D70015",
  },
  components: {
    Button: themeBtn,
  },
});

export default theme;
