const classes = {
  root: (dayNumber, isTodayPicked) => ({
    backgroundColor: isTodayPicked ? "#67E0A3" : "#AFF9C9",
    aspectRatio: 1 / 1,
    display: dayNumber < 1 ? "none" : "flex",
    cursor: "pointer",
    ...(!isTodayPicked && {
      "&:hover": {
        backgroundColor: "#7cf0bd",
      },
    }),
  }),
  text: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};

export default classes;
