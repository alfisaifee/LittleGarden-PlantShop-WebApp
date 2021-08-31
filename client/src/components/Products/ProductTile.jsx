import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import useStyles from "./styles";

const ProductTile = ({ product }) => {
  const classes = useStyles();

  return (
    <div>
      <h2>Lets Shop Plants</h2>
      <Card className={classes.productRoot}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            height="400"
            width="400"
          ></CardMedia>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductTile;
