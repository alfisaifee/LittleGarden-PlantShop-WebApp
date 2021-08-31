import "./App.css";
import React, { useState, useEffect } from "react";
import { Navbar, Home, Footer, Login, Register, Shopping } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserContext from "./context/userContext";
import axios from "./axios";

function App() {
  const [userData, setUserData] = useState({
    token: "",
    user: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider
        value={{ userData, setUserData, isLoggedIn, setIsLoggedIn }}
      >
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/shop" component={Shopping} />
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
