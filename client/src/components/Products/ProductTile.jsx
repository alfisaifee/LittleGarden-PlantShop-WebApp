import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";

const useStyles = makeStyles({
  productRoot: {
    margin: "20px",
    paddingBottom: "20px",
    width: "20rem",
    height: "30rem",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  cardContent: {
    // padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContentContainer: {
    height: "20%",
  },
  text: {
    fontSize: "16px",
    fontFamily: "Raleway, monospace",
    fontWeight: "700",
  },
  productMedia: {
    height: "80%",
  },
  cartButton: {
    marginTop: "10px",
  },
});

const ProductTile = ({ product }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.productRoot}>
        <CardMedia
          className={classes.productMedia}
          component="img"
          image={product.image}
          height={5}
          alt={product.name}
        ></CardMedia>
        <CardContent className={classes.cardContentContainer}>
          <div className={classes.cardContent}>
            <Typography variant="body1" className={classes.text}>
              {product.name}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {product.price}
            </Typography>
          </div>
          <div className={classes.cardContent}>
            <StarRatings
              rating={product.rating}
              starRatedColor="rgb(230, 67, 47)"
              starSpacing="1px"
              starDimension="20px"
              numberOfStars={5}
              name="rating"
            />
            <Typography variant="body1" className={classes.text}>
              {product.size}
            </Typography>
          </div>
          <Button className={classes.cartButton} variant="outlined">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductTile;
