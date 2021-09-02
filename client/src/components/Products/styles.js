import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: "none",
    padding: "12px",
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
  productsContainer: {},
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
  },
}));
