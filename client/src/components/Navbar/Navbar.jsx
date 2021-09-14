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
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
    background: "transparent",
    padding: "10px",
  },
  title: {
    fontSize: "20px",
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    marginRight: "8px",
    fontFamily: "Nibs, serif",
    fontWeight: "bold",
  },
  grow: {
    flexGrow: 15,
  },
  button: {
    fontSize: "15px",
    marginRight: "20px",
  },
  iconRoot: {
    textAlign: "center",
    marginLeft: "40px",
    marginRight: "10px",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setUserData, isLoggedIn, setIsLoggedIn, cartItems, setCartItems } =
    useContext(UserContext);

  const handleLoginLogOut = () => {
    if (isLoggedIn) {
      localStorage.removeItem("auth-token");
      localStorage.removeItem("cart");
      setUserData({ token: "", user: "" });
      setIsLoggedIn(false);
      setCartItems([]);
    }
    history.push("/login");
  };

  const handleCartClick = () => {
    history.push("/cart");
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

          {isLoggedIn ? (
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              className={classes.button}
              onClick={handleCartClick}
            >
              <Badge
                badgeContent={cartItems ? cartItems.length : null}
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
