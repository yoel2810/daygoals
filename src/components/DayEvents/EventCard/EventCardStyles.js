const classes = {
  root: {
    backgroundColor: "white",
    height: "4rem",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coloredBox: (color) => ({
    backgroundColor: color,
    height: "4rem",
    width: "0.75rem",
    position: "absolute",
  }),
  nameText: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  timeText: {
    fontSize: "1rem",
    color: "gray",
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

export default classes;
