import React from "react";
import { Grid, Link, TextField, Button, Box } from "@material-ui/core";
import useStyles from "./styles";
const SignIn = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form>
        <Grid container alignItems="center">
          <Grid item xs={12} className={classes.text}>
            <Box component="span" className={classes.featureText}>
              Sign In
            </Box>
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
            <Button className={classes.button}>Sign In</Button>
          </Grid>
          <Grid item xs={12}>
            <Link className={classes.link}>New User? Register</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignIn;
