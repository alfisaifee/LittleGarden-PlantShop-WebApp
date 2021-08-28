import React from "react";
import { Typography, Box, Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { createTheme } from "@material-ui/core/styles";
import plant from "../assets/images/plantMain.png";
import FeatureList from "./FeatureList/FeatureList";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SignIn from "../Login/SignIn";
import Register from "../Login/Register";

const Home = () => {
  const theme = createTheme({
    spacing: 8,
  });
  const classes = useStyles(theme);

  return (
    <div classes={classes.home}>
      <Grid container>
        <Grid item xs={7}>
          <Register />
          {/* 
          
          <Typography variant="h3" className={classes.slogan}>
            Bring Calm To
          </Typography>
          <Typography variant="h3" className={classes.slogan}>
            Your Place With
          </Typography>
          <Typography variant="h3" className={classes.slogan}>
            Plants
          </Typography>
          <Typography variant="body2" className={classes.description}>
            We are plant enthusiasts! We offer a carefully curated selection of
            indoor and outdoor plants, hand crafted home goods from our
            favourite distributors and bring them to you. We will share all our
            caring tips for beginner to pro.
          </Typography>
          <div className={classes.buttonContainer}>
            <Button className={classes.button}>Learn More</Button>
          </div>  */}
        </Grid>
        <Grid item xs={5}>
          <img src={plant} alt="" className={classes.plant} />
        </Grid>
        <div className={classes.featureContainer}>
          <Box component="span" className={classes.featureText}>
            Our Featured
          </Box>
        </div>
      </Grid>
      <FeatureList />
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
            label="Email"
            variant="outlined"
            className={classes.textField}
          />
          <Button className={classes.subscriptionButton}>
            <SubscriptionsIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
