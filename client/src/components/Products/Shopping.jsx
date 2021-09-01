import React from "react";
import ProductTile from "./ProductTile";
import useStyles from "./styles";
import { Grid, Typography, FormControl, Select } from "@material-ui/core";
import FilterColumn from "./FilterColumn";

const Shopping = () => {
  const classes = useStyles();
  const plants = [
    {
      id: 1,
      name: "Monsterra",
      image:
        "http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_terracotta_feb7ae27-1375-43fb-aec0-a55b416a3f58_1200x.jpg?v=1619569758",
      price: "$199",
      size: "ExtraLarge",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Alocasia Zebrina",
      image: "https://cdn.webshopapp.com/shops/59449/files/336903398/image.jpg",
      price: "$199",
      size: "Large",
      rating: 4,
    },
    {
      id: 3,
      name: "Monsterra",
      image:
        "http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_terracotta_feb7ae27-1375-43fb-aec0-a55b416a3f58_1200x.jpg?v=1619569758",
      price: "$199",
      size: "ExtraLarge",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Monsterra",
      image:
        "http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_terracotta_feb7ae27-1375-43fb-aec0-a55b416a3f58_1200x.jpg?v=1619569758",
      price: "$199",
      size: "ExtraLarge",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Monsterra",
      image:
        "http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_terracotta_feb7ae27-1375-43fb-aec0-a55b416a3f58_1200x.jpg?v=1619569758",
      price: "$199",
      size: "ExtraLarge",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Monsterra",
      image:
        "http://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_terracotta_feb7ae27-1375-43fb-aec0-a55b416a3f58_1200x.jpg?v=1619569758",
      price: "$199",
      size: "ExtraLarge",
      rating: 4.5,
    },
  ];
  return (
    <div className={classes.content}>
      <div className={classes.headerContainer}>
        <Typography variant="h3" className={classes.titleText}>
          Indoor Plants
        </Typography>
        <div className={classes.grow} />
        <FormControl className={classes.formControl}>
          <Select native className={classes.formControlSelect}>
            <option value={"Popularity"}>SORT BY POPULARITY</option>
            <option value={"Rating"}>SORT BY RATING</option>
            <option value={"Prices: High to Low"}>
              SORT BY PRICES: HIGH TO LOW
            </option>
            <option value={"Prices: Low to High"}>
              SORT BY PRICES: LOW TO HIGH
            </option>
          </Select>
        </FormControl>
      </div>
      <Grid container>
        <Grid item xs={3}>
          <FilterColumn />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            justifyContent="center"
            spacing={0}
            className={classes.productsContainer}
          >
            {plants.map((plant) => {
              return (
                <Grid item key={plant.id} xs={12} sm={6} md={4}>
                  <ProductTile product={plant} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shopping;
