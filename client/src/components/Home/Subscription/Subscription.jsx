import React from "react";
import useStyles from "./styles";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { Typography, Button, TextField } from "@material-ui/core";

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
