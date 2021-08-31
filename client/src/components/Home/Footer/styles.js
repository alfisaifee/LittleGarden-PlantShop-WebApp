import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "75px",
    boxShadow: "none",
    background: "#c5a183",
    overflow: "auto",
  },

  toolbar: {
    width: "100%",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  link: {
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  grow: { flex: 1 },
}));
