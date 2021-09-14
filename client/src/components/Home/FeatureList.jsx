import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    alignItems: "left",
    padding: "80px 0px",
  },
  featureListRoot: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "80%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: "20rem",
  },

  featureText: {
    marginLeft: "200px",
    fontWeight: "bold",
    fontSize: "40px",
    fontFamily: "Nibs, serif",
    textAlign: "left",
  },
  productRoot: {
    margin: "20px",
    paddingBottom: "20px",
    width: "20rem",
    height: "30rem",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  productMedia: {
    height: "95%",
    display: "flex",
    justifyContent: "left",
  },
});

const FeatureList = ({ plants }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const cardCount = 3;

  const handleBackButtonClick = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleFrontButtonClick = () => {
    if (index + cardCount >= 6) return;
    setIndex(index + 1);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.featureText}>Best Sellers</Typography>
      <div className={classes.featureListRoot}>
        <IconButton
          disableRipple={true}
          onClick={handleBackButtonClick}
          className={classes.iconButton}
        >
          <ArrowBackIosIcon />
        </IconButton>
        {plants.slice(index, index + cardCount).map((plant) => (
          <Card className={classes.productRoot}>
            <CardMedia
              className={classes.productMedia}
              component="div"
              image={plant.imageURL}
              height={5}
              alt={plant.name}
            ></CardMedia>
            <CardContent>
              <Typography>{plant.name}</Typography>
            </CardContent>
          </Card>
        ))}
        <IconButton
          disableRipple={true}
          onClick={handleFrontButtonClick}
          className={classes.iconButton}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FeatureList;
