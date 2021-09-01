import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  subsContainer: {
    paddingTop: "100px",
    paddingBottom: "100px",
    background: "#224229",
    borderTop: "1px solid #fff",
    color: "#fcf9f3",
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
    color: "#fcf9f3",
  },
  textField: {
    marginTop: "16px",
    "& label.Mui-focused": {
      color: "#fcf9f3",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fcf9f3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fcf9f3",
      },
      "&:hover fieldset": {
        borderColor: "#fcf9f3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fcf9f3",
      },
    },
  },
}));
