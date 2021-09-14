import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

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
    display: "flex",
    justifyContent: "left",
  },
  cartButton: {
    marginTop: "10px",
  },
  discountTag: {
    height: "6%",
    width: "25%",

    backgroundColor: "red",
    color: "white",
  },
  grow: { flex: 0.8 },
});

const ProductTile = ({ product, user, userStatus }) => {
  const classes = useStyles();
  const history = useHistory();
  const { userData, getCartItems } = useContext(UserContext);

  const handleAddToCart = async () => {
    if (!userStatus) {
      history.push("/login");
    } else {
      try {
        const item = { productId: product._id };
        await axios.post(`/shop/cart/${user.id}`, item);
        alert(product.name + " added to cart");
        console.log(userData);
        getCartItems(userData.user.id);
      } catch (err) {
        alert(err.response.data);
      }
    }
  };

  return (
    <div>
      <Card className={classes.productRoot}>
        <CardMedia
          className={classes.productMedia}
          component="div"
          image={product.imageURL}
          height={5}
          alt={product.name}
        >
          {product.discount > 0 ? (
            <div className={classes.discountTag}>{product.discount}% Off</div>
          ) : null}
        </CardMedia>
        <CardContent className={classes.cardContentContainer}>
          <div className={classes.cardContent}>
            <Typography variant="body1" className={classes.text}>
              {product.name}
            </Typography>
            <div className={classes.grow}></div>
            {product.discount > 0 ? (
              <Typography color="secondary" className={classes.text}>
                {"$" + getDiscountPrice(product.price, product.discount)}
              </Typography>
            ) : null}
            {product.discount > 0 ? (
              <Typography
                style={{ textDecorationLine: "line-through" }}
                variant="body1"
                className={classes.text}
              >
                {"$" + product.price}
              </Typography>
            ) : (
              <Typography variant="body1" className={classes.text}>
                {"$" + product.price}
              </Typography>
            )}
          </div>
          <div className={classes.cardContent}>
            <StarRatings
              rating={product.rating}
              starRatedColor="rgb(230, 67, 47)"
              starSpacing="1px"
              starDimension="20px"
              numberOfStars={5}
              name="rating"
              starEmptyColor="#C8C8C8"
            />
            <Typography variant="body1" className={classes.text}>
              {getProductSize(product.size)}
            </Typography>
          </div>
          {product.inStock === 0 ? (
            <Button disabled className={classes.cartButton}>
              Out of Stock
            </Button>
          ) : (
            <Button
              className={classes.cartButton}
              variant="outlined"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const getDiscountPrice = (price, discount) => {
  return Math.floor((price - price * (discount / 100)) * 100) / 100;
};

const getProductSize = (size) => {
  if (size === "xs") return "Extra Small";
  else if (size === "s") return "Small";
  else if (size === "m") return "Medium";
  else if (size === "l") return "Large";
  return "Extra Large";
};
export default ProductTile;
