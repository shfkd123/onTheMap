const themeBtn = {
  variants: {
    standardLarge: {
      w: "360px",
      h: "48px",
      p: "6px, 15px, 6px, 15px",
      gap: "10px",
      borderRadius: "2px",
      color: "#fff",
    },

    standardMedium: {
      w: "152px",
      h: "32px",
      p: "4px, 15px, 4px, 15px",
      gap: "8px",
      borderRadius: "4px",
      color: "#fff",
      textAlign: "center",
      fontWeight: "700",
      fontSize: "14px",
    },

    standardSmall: {
      w: "58px",
      h: "32px",
      p: "4px, 15px, 4px, 15px",
      gap: "8px",
      border: "1px",
      borderRadius: "2px",
      color: "#fff",
    },
    circle: {
      w: "40px",
      h: "40px",
      borderRadius: "50%",
    },
  },
  defaultProps: {
    variants: "standardLarge",
  },
};
export default themeBtn;
