import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Divider, Grid } from "@material-ui/core";
import plant from "../assets/images/plantMain.png";
import FeatureList from "./FeatureList";
import Subscription from "./Subscription";
import Service from "./Service";
import axios from "../../axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  home: {
    width: "100%",
    minHeight: "100%",
  },
  homeLanding: {
    paddingBottom: "30px",
  },
  slogan: {
    fontWeight: 900,
    marginLeft: "200px",
    textAlign: "left",
  },
  description: {
    marginTop: "40px",
    marginLeft: "200px",
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: "40px",
    marginLeft: "200px",
    textAlign: "left",
  },
  button: {
    color: "white",
    backgroundColor: "black",
    fontSize: "12px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  plant: {
    backgroundColor: "transparent",
    width: "520px",
    height: "640px",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: { backgroundColor: "#224229", height: "4px", margin: "0px 190px" },
});

const Home = () => {
  const classes = useStyles();
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const getBestSellers = async () => {
      const products = await axios.get("/shop/products/best");
      setBestSellers(products.data);
    };

    getBestSellers();
  }, [bestSellers]);

  return (
    <div className={classes.home}>
      <Grid container className={classes.homeLanding}>
        <Grid item xs={7}>
          <Box mt={18} />
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
        <Grid item xs={5}>
          <img src={plant} alt="" className={classes.plant} />
        </Grid>
      </Grid>
      <Divider variant="middle" className={classes.divider} />
      <FeatureList plants={bestSellers} />
      <Divider variant="middle" className={classes.divider} />
      <Service />
      <Subscription />
    </div>
  );
};

export default Home;
