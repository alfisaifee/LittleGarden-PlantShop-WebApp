import React, { useContext } from "react";
import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Grid,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import UserContext from "../../context/userContext";
import axios from "../../axios";

const useStyles = makeStyles({
  root: {
    minHeight: "90vh",
    margin: "50px 200px",
  },
  text: {
    fontWeight: "700",
    fontStyle: "Optima, sans-serif",
    marginBottom: "20px",
  },
  descpImage: {
    width: "150px",
    height: "150px",
  },
  descpRow: {
    width: "35%",
  },
  quantityField: {
    width: "80px",
  },
  checkout: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "30px 0px",
    marginBottom: "180px",
    marginTop: "50px",
  },

  checkoutButton: {
    padding: "10px 50px",
    borderRadius: "28px",
    backgroundColor: "#224229",
    "&:hover": {
      backgroundColor: "#224229",
    },
    color: "#fcf9f3",
  },
});

const Cart = () => {
  const classes = useStyles();

  const { userData, cartItems, getCartItems } = useContext(UserContext);

  const handleChange = async (e, itemId) => {
    await axios.put(`/shop/cart/${userData.user.id}/${itemId}`, {
      quantity: e.target.value,
    });
    getCartItems(userData.user.id);
  };

  const handleItemDelete = async (productId) => {
    await axios.delete(`/shop/cart/${userData.user.id}/${productId}`);
    getCartItems(userData.user.id);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.text}>
        Shopping Cart
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems &&
              cartItems.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left" className={classes.descpRow}>
                    <Grid container>
                      <Grid item xs={6}>
                        <img
                          src={row.img}
                          alt={row.name}
                          className={classes.descpImage}
                        ></img>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>{row.name}</Typography>
                        <Typography>{getSize(row.size)}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      size="small"
                      variant="outlined"
                      type="number"
                      defaultValue={row.quantity}
                      className={classes.quantityField}
                      onChange={(e) => handleChange(e, row.productId)}
                      InputProps={{
                        inputProps: {
                          max: row.inStock,
                          min: 1,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {row.discountPrice ? (
                      <span style={{ color: "red" }}>
                        ${row.discountPrice}{" "}
                      </span>
                    ) : null}
                    {row.discountPrice ? (
                      <span style={{ textDecorationLine: "line-through" }}>
                        ${row.price}
                      </span>
                    ) : (
                      <span>${row.price}</span>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    $
                    {row.discountPrice
                      ? calItemTotalPrice(row.discountPrice, row.quantity)
                      : calItemTotalPrice(row.price, row.quantity)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleItemDelete(row.productId)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">
                ${calSubtotalPrice(cartItems)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">7%</TableCell>
              <TableCell align="right">${calTaxPrice(cartItems)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${calTotalPrice(cartItems)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.checkout}>
        <Button className={classes.checkoutButton} variant="contained">
          Checkout
        </Button>
      </div>
    </div>
  );
};

const getSize = (size) => {
  if (size === "xs") return "Extra Small";
  else if (size === "s") return "Small";
  else if (size === "m") return "Medium";
  else if (size === "l") return "Large";
  return "Extra Large";
};

const calItemTotalPrice = (price, quantity) => {
  return Math.round(price * quantity * 100) / 100;
};

const calSubtotalPrice = (cartItems) => {
  let total = 0;
  for (let item in cartItems) {
    total += cartItems[item].discountPrice
      ? calItemTotalPrice(
          cartItems[item].discountPrice,
          cartItems[item].quantity
        )
      : calItemTotalPrice(cartItems[item].price, cartItems[item].quantity);
  }
  return Math.round(total * 100) / 100;
};

const calTaxPrice = (cartItems) => {
  const total = calSubtotalPrice(cartItems);
  return Math.round(total * (7 / 100) * 100) / 100;
};

const calTotalPrice = (cartItems) => {
  return (
    Math.round((calSubtotalPrice(cartItems) + calTaxPrice(cartItems)) * 100) /
    100
  );
};

export default Cart;
