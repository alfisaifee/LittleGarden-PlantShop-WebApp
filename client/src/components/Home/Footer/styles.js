import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    boxShadow: "none",
    background: "#c5a183",
    height: "100%",
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
