import React from "react";
import ProductTile from "./ProductTile";
import useStyles from "./styles";
import { Grid, Typography, FormControl, Select } from "@material-ui/core";
import FilterColumn from "./FilterColumn";
import plantsData from "../assets/data/sampleData.js";

const Shopping = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.headerContainer}>
        <Typography variant="h3" className={classes.titleText}>
          House Plants
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
            {plantsData.map((plant) => {
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
