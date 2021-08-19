import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart, Eco } from "@material-ui/icons";
import useStyles from "./styles";
import { createTheme } from "@material-ui/core/styles";

const Navbar = () => {
  const theme = createTheme({
    spacing: 8,
  });
  const classes = useStyles(theme);
  return (
    <>
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Eco className={classes.iconRoot} />
            Little Garden
          </Typography>
          <div>
            <Button color="inherit" className={classes.button}>
              Shop
            </Button>
          </div>
          <div>
            <Button color="inherit" className={classes.button}>
              Plant Care
            </Button>
          </div>
          <div>
            <Button color="inherit" className={classes.button}>
              About
            </Button>
          </div>
          <div className={classes.grow} />
          <div>
            <Button variant="outlined" color="inherit" className={classes.button}>
              Login
            </Button>
          </div>
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
