import React, { useState } from "react";
import {
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ProductTile from "../../Products/ProductTile";
import plantsData from "../../assets/data/sampleData.js";

const FeatureList = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const cardCount = 3;

  const handleBackButtonClick = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleFrontButtonClick = () => {
    if (index + cardCount >= plantsData.length) return;
    setIndex(index + 1);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.featureText}>Best Sellers</Typography>
      <div className={classes.featureListRoot}>
        <IconButton
          onClick={handleBackButtonClick}
          className={classes.iconButton}
        >
          <ArrowBackIosIcon />
        </IconButton>
        {plantsData.slice(index, index + cardCount).map((plant) => (
          <ProductTile product={plant} />
        ))}
        <IconButton
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
