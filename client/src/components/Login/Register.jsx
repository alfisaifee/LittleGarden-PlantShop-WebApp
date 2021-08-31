import React, { useState, useContext } from "react";
import { Grid, TextField, Button, Box, Link } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import UserContext from "../../context/userContext";
import ErrorDisplay from "../shared/ErrorDisplay";

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const newUser = { username, email, password, passwordCheck };
      await axios.post("/users/register", newUser);
      const loginRes = await axios.post("/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={(e) => handleRegistration(e)}>
        <Grid container alignItems="center">
          <Grid item xs={12} className={classes.text}>
            <Box component="span" className={classes.featureText}>
              Register New User
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              className={classes.textField}
              label="Username"
              size="small"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              className={classes.textField}
              label="Email"
              size="small"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              className={classes.textField}
              label="Password"
              size="small"
              type="password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password2"
              className={classes.textField}
              label="Confirm Password"
              size="small"
              type="password"
              variant="filled"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.button} type="submit">
              Register
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
              onClick={() => history.push("/login")}
            >
              Already a User? Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Register;
