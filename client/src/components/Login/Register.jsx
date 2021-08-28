import React from "react";
import { Grid, TextField, Button, Box, Link } from "@material-ui/core";
import useStyles from "./styles";
const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form>
        <Grid container alignItems="center">
          <Grid item xs={12} className={classes.text}>
            <Box component="span" className={classes.featureText}>
              Register New User
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Username"
              name="name"
              size="small"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Email"
              name="email"
              size="small"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Password"
              name="password"
              size="small"
              type="password"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Confirm Password"
              name="password"
              size="small"
              type="password"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button}>Register</Button>
          </Grid>
          <Grid item xs={12}>
            <Link className={classes.link}>Already a User? Sign In</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Register;
