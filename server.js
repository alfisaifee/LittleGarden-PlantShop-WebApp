import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import users from "./routes/users.js";
import products from "./routes/products.js";
import cart from "./routes/cart.js";
import config from "config";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

//mongo db connection
const db = config.get("mongoURI");
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

//routes
app.use("/users", users);
app.use("/shop", products);
app.use("/shop", cart);

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
