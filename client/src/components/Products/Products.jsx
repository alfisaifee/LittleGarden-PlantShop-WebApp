import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.jsx";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Monsterra",
    description: "Monsterra Home Plant",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/712J0qb2juL._AC_SX466_.jpg",
  },
  {
    id: 2,
    name: "Golden Pothos",
    description: "Golden Pothos Home Plant",
    price: "$10.49",
    image: "https://m.media-amazon.com/images/I/81m0IBljM-L._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Wandering Jew",
    description: "Wandering Jew Home Plant",
    price: "$12.99",
    image:
      "https://cdn11.bigcommerce.com/s-2drwt2az/images/stencil/original/products/56113/128229/tradescantiafluminensian4__89044.1623790280.jpg?c=2",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
