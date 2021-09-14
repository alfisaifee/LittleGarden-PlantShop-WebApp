import React, { useState, useEffect, useContext } from "react";
import ProductTile from "./ProductTile";
import useStyles from "./styles";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  CircularProgress,
  Button,
} from "@material-ui/core";
import FilterColumn from "./FilterColumn";
import axios from "../../axios";
import UserContext from "../../context/userContext";

const Shopping = () => {
  const classes = useStyles();

  const skip = 9;

  const [data, setData] = useState();
  const [selectedOptions, setSelectedOptions] = useState({
    indoorLight: [],
    size: [],
    maintenance: [],
    price: [],
  });
  const [sortBy, setSortBy] = useState("");
  const [limit, setLimit] = useState(skip);
  const { userData, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, [limit, selectedOptions, sortBy]);

  const getData = async () => {
    const products = await axios.post("/shop/products", {
      filter: selectedOptions,
      sort: sortBy,
      limit: limit,
    });
    setData(products.data);
  };

  const handleCheck = async (sub, value) => {
    let newSelectedOptions = { ...selectedOptions };
    let newValue = [];
    let options = selectedOptions[value];
    if (value === "price") {
      if (options.length === 0 || options[0].name !== sub.name) {
        newValue = [sub];
      }
    } else {
      if (options.includes(sub)) {
        newValue = options.filter((v) => v !== sub);
      } else {
        newValue = [...options, sub];
      }
    }

    newSelectedOptions[value] = newValue;
    setSelectedOptions(newSelectedOptions);
    setLimit(skip);
  };

  const handleClick = async () => {
    let newSelectedOptions = {
      indoorLight: [],
      size: [],
      maintenance: [],
      price: [],
    };
    setSelectedOptions(newSelectedOptions);
    setSortBy("");
    setLimit(skip);
  };

  return (
    <div className={classes.content}>
      <div className={classes.headerContainer}>
        <Typography variant="h3" className={classes.titleText}>
          House Plants
        </Typography>
        <div className={classes.grow} />
        <FormControl className={classes.formControl}>
          <Select
            native
            className={classes.formControlSelect}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option disabled selected value>
              SORT BY
            </option>
            <option value={"rating"}>SORT BY RATING</option>
            <option value={"pricesHtoL"}>SORT BY PRICES: HIGH TO LOW</option>
            <option value={"pricesLtoH"}>SORT BY PRICES: LOW TO HIGH</option>
          </Select>
        </FormControl>
      </div>
      <Grid container className={classes.container}>
        <Grid item xs={3}>
          <FilterColumn
            selectedOptions={selectedOptions}
            handleCheck={handleCheck}
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            justifyContent="center"
            spacing={0}
            className={classes.productsContainer}
          >
            {data === undefined ? (
              <CircularProgress />
            ) : (
              data.map((plant) => {
                return (
                  <Grid item key={plant.id} xs={12} sm={6} md={4}>
                    <ProductTile
                      product={plant}
                      user={userData.user}
                      userStatus={isLoggedIn}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
          {data && data.length >= limit && data.length >= skip ? (
            <Button
              className={classes.loadButton}
              onClick={() => {
                setLimit(limit + skip);
              }}
            >
              Load More
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default Shopping;
