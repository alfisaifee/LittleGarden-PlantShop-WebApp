import React, { useState, useContext } from "react";
import { Grid, Link, TextField, Button, Box } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import UserContext from "../../context/userContext";

import ErrorDisplay from "../shared/ErrorDisplay";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { setUserData, setIsLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await axios.post("/users/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      setIsLoggedIn(true);
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={(e) => handleLogin(e)}>
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} type="submit">
              Sign In
            </Button>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <ErrorDisplay
                message={error}
                clearError={() => setError(undefined)}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Link
              className={classes.link}
              onClick={() => history.push("/register")}
            >
              New User? Register
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignIn;
