import React from "react";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subsContainer: {
    paddingTop: "100px",
    paddingBottom: "100px",
    background: "#224229",
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
});

const Subscription = () => {
  const classes = useStyles();
  return (
    <div className={classes.subsContainer}>
      <Typography variant="body2" className={classes.text}>
        STAY IN THE LOOP
      </Typography>
      <Typography variant="body2" className={classes.text}>
        Stay in the loop with special offers, plant-parenting tips, and more.
      </Typography>
      <div className={classes.emailContainer}>
        <TextField
          id="outlined"
          variant="outlined"
          className={classes.textField}
        />
        <Button className={classes.subscriptionButton}>
          <SubscriptionsIcon />
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
