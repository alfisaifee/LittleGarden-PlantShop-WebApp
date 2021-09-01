import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginLeft: "0px",
    marginRight: "0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "50px",
    marginBottom: "50px",
    paddingBottom: "150px",
    paddingTop: "75px",
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: "20rem",
  },
}));
