import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  subsContainer: {
    paddingTop: "40px",
    paddingBottom: "48px",
    background: "#c5a183",
  },
  text: {
    paddingBottom: "40px",
    fontSize: "15px",
    fontWeight: "bold",
  },
  emailContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subscriptionButton: {
    marginTop: "16px",
  },
  textField: {
    marginTop: "16px",
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
}));
