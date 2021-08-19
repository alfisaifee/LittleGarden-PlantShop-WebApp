import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "block",
    width: "25rem",
    transitionDuration: "0.3s",
    height: "20rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-start",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
