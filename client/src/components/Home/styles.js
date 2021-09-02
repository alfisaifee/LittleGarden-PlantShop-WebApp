import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  home: {
    width: "100%",
    minHeight: "100%",
  },
  homeLanding: {
    paddingBottom: "30px",
  },
  slogan: {
    fontWeight: 900,
    marginLeft: theme.spacing(25),
    textAlign: "left",
  },
  description: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(25),
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(25),
    textAlign: "left",
  },
  button: {
    color: "white",
    backgroundColor: "black",
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  plant: {
    backgroundColor: "transparent",
    width: theme.spacing(65),
    height: theme.spacing(80),
  },

  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: { backgroundColor: "#224229", height: "3 px" },
}));
