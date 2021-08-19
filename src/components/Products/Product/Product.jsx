import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = (product) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.product.image}
        title={product.product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body2" gutterBottom>
            {product.product.name}
          </Typography>
          <Typography variant="body2">{product.product.price}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default Product;
