import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { createTheme } from "@material-ui/core/styles";
import plant from "../assets/images/plantMain.png";
import FeatureList from "./FeatureList/FeatureList";

const Home = () => {
  const theme = createTheme({
    spacing: 8,
  });
  const classes = useStyles(theme);

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Box mt={16} />
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
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={plant} alt="" className={classes.plant} />
        </Grid>
        <div className={classes.featureContainer}>
          <Box component="span" className={classes.featureText}>
            Our Featured
          </Box>
        </div>
      </Grid>
      <FeatureList className={classes.feature} />
    </div>
  );
};

export default Home;
