import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "50px",
  },
  gridList: {
    flexWrap: "nowrap",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
}));
