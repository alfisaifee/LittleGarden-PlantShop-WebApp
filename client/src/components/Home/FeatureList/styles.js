import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    alignItems: "left",
  },
  featureListRoot: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(5),

    width: "80%",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: "20rem",
  },

  featureText: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(25),
    fontWeight: "bold",
    fontSize: "40px",
    fontFamily: "Nibs, serif",
    textAlign: "left",
  },
}));
