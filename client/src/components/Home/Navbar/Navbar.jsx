import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart, Eco } from "@material-ui/icons";
import useStyles from "./styles";
import { createTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import UserContext from "../../../context/userContext";

const Navbar = () => {
  const theme = createTheme({
    spacing: 8,
  });
  const classes = useStyles(theme);
  const history = useHistory();
  const { setUserData, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLoginLogOut = () => {
    if (isLoggedIn) {
      localStorage.removeItem("auth-token");
      setUserData({ token: "", user: "" });
      setIsLoggedIn(false);
    }
    history.push("/login");
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Eco className={classes.iconRoot} />
            Little Garden
          </Typography>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => history.push("/shop")}
          >
            Shop
          </Button>
          <Button color="inherit" className={classes.button}>
            Plant Care
          </Button>
          <Button color="inherit" className={classes.button}>
            About
          </Button>
          <div className={classes.grow} />
          <Button
            variant="outlined"
            color="inherit"
            className={classes.button}
            onClick={handleLoginLogOut}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
