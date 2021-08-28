import React, { useState } from "react";
import {
  Button,
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
    {
      id: 2,
      name: "Elephant Ears",
      price: "$40",
      image: "https://m.media-amazon.com/images/I/61gUggWD+bL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      name: "Swiss Cheese Plant",
      price: "$20",
      image:
        "https://i5.walmartimages.com/asr/a9192e97-40c1-4514-af05-7ca0496b9362_1.0cff2fbd2913b1e855d61a93c60d5537.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 4,
      name: "Blue Moonstone",
      price: "$10",
      image: "https://m.media-amazon.com/images/I/51IUJC9wZ1L._AC_SY450_.jpg",
    },
    {
      id: 5,
      name: "Balloon Flower",
      price: "$15",
      image:
        "https://mobileimages.lowes.com/productimages/751ee87f-c00c-4c68-b96b-e00a2d8e8033/02110884.jpg?size=pdhi",
    },
    {
      id: 6,
      name: "Wandering Jew",
      price: "$25",
      image:
        "https://i5.walmartimages.com/asr/d2afa5b9-8f29-48a7-8abc-ad9b964e224e.f83bcd44ffbe927c552b544ae03624a3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
  ];
  const cardCount = 3;

  const handleBackButtonClick = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const handleFrontButtonClick = () => {
    if (index + cardCount >= featurePlants.length) return;
    setIndex(index + 1);
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleBackButtonClick}
        className={classes.iconButton}
      >
        <ArrowBackIosIcon />
      </IconButton>
      {featurePlants.slice(index, index + cardCount).map((plant) => (
        <Card key={plant.id} className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={plant.image}
              alt={plant.name}
              height="280"
            />
            <CardContent style={{ background: "#c4b2a4" }}>
              <div className={classes.cardContent}>
                <Typography variant="body2">{plant.name}</Typography>
                <Typography variant="body2">{plant.price}</Typography>
                <Button size="small" variant="outlined">
                  Shop
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <IconButton
        onClick={handleFrontButtonClick}
        className={classes.iconButton}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default FeatureList;
