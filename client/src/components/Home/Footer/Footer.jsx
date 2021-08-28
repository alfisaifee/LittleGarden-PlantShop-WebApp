import React from "react";
import {
  Link,
  BottomNavigation,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Instagram, Facebook, Pinterest, Twitter } from "@material-ui/icons";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.footer}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="body2">
            <Link color="inherit" className={classes.link}>
              Terms
            </Link>
            <Link color="inherit" className={classes.link}>
              Privacy Policy
            </Link>
            <Link color="inherit" className={classes.link}>
              Acessibility
            </Link>
          </Typography>
        </div>
        <div className={classes.grow}></div>
        <div>
          <IconButton aria-label="instagram" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton aria-label="instagram" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton aria-label="instagram" color="inherit">
            <Pinterest />
          </IconButton>
          <IconButton aria-label="instagram" color="inherit">
            <Twitter />
          </IconButton>
        </div>
      </Toolbar>
    </BottomNavigation>
  );
};

export default Footer;
