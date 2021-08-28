import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    marginTop: "40px",
  },
  featureText: { fontWeight: 800, fontSize: "28px" },
  text: { marginTop: "50px" },
  textField: {
    width: "50%",
    marginTop: "30px",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  button: {
    marginTop: "50px",
    marginBottom: "20px",
    color: "white",
    backgroundColor: "black",
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));
