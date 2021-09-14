import React from "react";
import {
  Link,
  BottomNavigation,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Instagram, Facebook, Pinterest, Twitter } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    height: "75px",
    boxShadow: "none",
    background: "#224229",
    overflow: "auto",
    color: "#fcf9f3",
  },

  toolbar: {
    width: "100%",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  link: {
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  grow: { flex: 1 },
});

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
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Pinterest />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
        </div>
      </Toolbar>
    </BottomNavigation>
  );
};

export default Footer;
