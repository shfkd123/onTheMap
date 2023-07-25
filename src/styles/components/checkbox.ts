const themeCheckBox = {
  variants: {
    primary: {
      borderRadius: "2px",
      borderColor: "rgba(0, 0, 0, 0.5)",
      colorScheme: "none",
      _checked: { color: "white", backgroundColor: "#268EFF" },
    },
    black: {
      borderRadius: "2px",
      borderColor: "rgba(0, 0, 0, 0.5)",
      colorScheme: "none",
      _checked: { color: "white", backgroundColor: "black" },
    },
  },
  defaultProps: {
    variants: "black",
  },
};
export default themeCheckBox;
