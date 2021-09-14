import "./App.css";
import React, { useState, useEffect } from "react";
import { Navbar, Home, Footer, Login, Register, Shopping } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContext from "./context/userContext";
import axios from "./axios";
import Cart from "./components/Cart/Cart";

function App() {
  const [userData, setUserData] = useState({
    token: "",
    user: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    checkLoggedIn();
    if (isLoggedIn) {
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    }
  }, [isLoggedIn]);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }

    const tokenRes = await axios.post("/users/tokenIsValid", null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (tokenRes.data) {
      const userRes = await axios.get("/users/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserData({ token, user: userRes.data });
      setIsLoggedIn(true);
    }
  };

  const getCartItems = async (userId) => {
    const items = await axios.get(`/shop/cart/${userId}`);
    for (let item in items.data) {
      const product = await axios.get(
        `/shop/product/${items.data[item].productId}`
      );
      items.data[item]["name"] = product.data.name;
      items.data[item]["img"] = product.data.imageURL;
      items.data[item]["size"] = product.data.size;
      items.data[item]["inStock"] = product.data.inStock;
      items.data[item]["price"] = product.data.price;
      if (product.data.discount > 0)
        items.data[item]["discountPrice"] =
          Math.round(
            (product.data.price -
              (product.data.price * product.data.discount) / 100) *
              100
          ) / 100;
    }
    localStorage.setItem("cart", JSON.stringify(items.data));
    setCartItems(items.data);
  };

  return (
    <Router>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          isLoggedIn,
          setIsLoggedIn,
          cartItems,
          setCartItems,
          getCartItems,
        }}
      >
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/shop" component={Shopping} />
          <Route exact path="/cart" component={Cart} />
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
