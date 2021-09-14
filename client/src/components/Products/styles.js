import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    minHeight: "100vh",
    flexGrow: 1,
    backgroundColor: "none",
    padding: "12px",
  },
  container: {
    paddingBottom: "4rem",
  },
  filterRoot: {
    marginLeft: "25px",
  },
  filterOptionContainer: {
    width: "70%",
    paddingLeft: "30px",
    paddingRigth: "30px",
  },
  filterOptionText: {
    fontSize: "18px",
    fontFamily: "Nibs, serif",
  },
  titleText: {
    marginLeft: "55px",
    marginBottom: "50px",
    marginTop: "30px",
    textAlign: "left",
    fontWeight: "800",
    color: "darkgreen",
    fontFamily: "Nibs, serif",
  },
  productsContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  headerContainer: { display: "flex", flexWrap: "wrap", alignItems: "center" },
  grow: { flex: 1 },
  formControl: {
    marginRight: "40px",
    width: "25%",
    height: "25px",
  },
  formControlSelect: {
    fontFamily: "Nibs, serif",
    fontSize: "15px",
    backgroundColor: "transparent",
    padding: "5px",
  },
  resetButton: {
    margin: "50px 30px 5px 0px",
    borderRadius: "28px",
    color: "#fcf9f3",
    padding: "10px 30px",
    backgroundColor: "#224229",
    "&:hover": {
      backgroundColor: "#224229",
    },
  },
  loadButton: {
    margin: "50px 0px",
    color: "#fcf9f3",
    borderRadius: "28px",
    backgroundColor: "#224229",
    padding: "10px 50px",
    "&:hover": {
      backgroundColor: "#224229",
    },
  },
}));
