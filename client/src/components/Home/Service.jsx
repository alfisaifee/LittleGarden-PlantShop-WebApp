import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "150px",
  },
  serviceButton: {
    borderRadius: "28px",
    color: "#fcf9f3",
    backgroundColor: "#224229",
    "&:hover": {
      backgroundColor: "#224229",
    },
  },
  image: {
    width: "85%",
    height: "500px",
    borderRadius: "20px",
  },
  serviceContainer: {
    padding: "10px",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontFamily: "Nibs, serif",
    fontweight: "bold",
    textAlign: "left",
    color: "#224229",
  },
  textDescription: {
    textAlign: "left",
  },
});
const Service = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={8}>
          <img
            className={classes.image}
            src="https://i2.wp.com/dennis7dees.com/wp-content/uploads/2021/03/low-light-houseplants.jpg?fit=1200%2C800&ssl=1"
            alt=""
          ></img>
        </Grid>
        <Grid item xs={4} className={classes.serviceContainer}>
          <Typography variant="h2" className={classes.textHeader}>
            Service for
          </Typography>
          <Typography variant="h2" className={classes.textHeader}>
            house plants.
          </Typography>
          <Box mt={4} />
          <Typography className={classes.textDescription}>
            If you don't know what plants you can add to the
          </Typography>
          <Typography className={classes.textDescription}>
            space, we can provide you with selected
          </Typography>
          <Typography className={classes.textDescription}>
            plants, and configure your space.
          </Typography>
          <Box mt={6} />
          <Button variant="contained" className={classes.serviceButton}>
            Try for Service
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
