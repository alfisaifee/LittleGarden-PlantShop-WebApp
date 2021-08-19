import React, { useState } from "react";
import {
  Grid,
  // GridList,
  // GridListTile,
  // GridListTileBar,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import Product from "../../Products/Product/Product";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const FeatureList = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const featurePlants = [
    {
      id: 1,
      name: "Alocasia Zebrina",
      price: "$25",
      image:
        "https://smartgardenguide.com/wp-content/uploads/2020/04/alocasia-zebrina-care-4.jpg",
    },
    { id: 2, name: "Elephant Ears", price: "$40", image: "" },
    { id: 3, name: "Swiss Cheese Plant", price: "$20", image: "" },
    { id: 4, name: "Blue Moonstone", price: "$10", image: "" },
    { id: 5, name: "Balloon Flower", price: "$15", image: "" },
    { id: 6, name: "Coral Bells", price: "$25", image: "" },
  ];
  const cardCount = 3;

  const handleBackButtonClick = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleFrontButtonClick = () => {
    console.log(index);
    if (index + cardCount >= featurePlants.length) return;
    setIndex(index + 1);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleBackButtonClick}>
        <ArrowBackIosIcon />
      </Button>
      <Grid container>
        <Grid item xs={12}>
          {featurePlants.slice(index, index + cardCount).map((plant) => (
            <Product product={plant} />
          ))}
        </Grid>
      </Grid>
      <Button onClick={handleFrontButtonClick}>
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default FeatureList;
