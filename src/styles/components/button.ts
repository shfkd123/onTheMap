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
  },
  defaultProps: {
    variants: "standardMedium",
  },
};
export default themeBtn;
