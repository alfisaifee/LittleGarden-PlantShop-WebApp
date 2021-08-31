import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    minHeight: "75vh",
    paddingTop: "3rem",
    textAlign: "center",
  },
  featureText: { fontWeight: 800, fontSize: "28px" },
  textField: {
    width: "25%",
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
