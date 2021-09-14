import express from "express";
import bcrypt from "bcryptjs";
import validateRegisterInput from "../validation/register.js";
import validateLoginInput from "../validation/login.js";
import Users from "../models/User.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import config from "config";
import auth from "../middleware/auth.js";

const router = express.Router();
router.use(cors());

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const { errors, isValid } = validateRegisterInput(user);
    console.log(errors, isValid);
    if (!isValid) return res.status(400).json({ message: errors });
    const takenUserName = await Users.findOne({ username: user.username });
    const takenEmail = await Users.findOne({ email: user.email });

    if (takenUserName)
      res.status(400).json({ message: "Username already exists" });
    else if (takenEmail)
      res.status(400).json({ message: "Email already exists" });
    else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(user.password, salt);
      const newUser = new Users({
        username: user.username,
        email: user.email,
        password: passwordHash,
      });
      let savedUser = await newUser.save();
      res.json(savedUser);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userLoggingIn = req.body;
    const { errors, isValid } = validateLoginInput(userLoggingIn);
    if (!isValid) {
      return res.status(400).json({ message: errors });
    }
    const user = await Users.findOne({ email: userLoggingIn.email });
    if (!user)
      return res.status(400).json({
        message: "User does not exist. Register to create an account",
      });
    const isMatch = await bcrypt.compare(userLoggingIn.password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ id: user._id }, config.get("jwtsecret"));

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];

    if (!token) return res.json(false);

    const verified = jwt.verify(token, config.get("jwtsecret"));

    if (!verified) return res.json(false);

    const user = await Users.findById(verified.id);

    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await Users.findById(req.user);
  res.json({ username: user.username, id: user._id });
});

export default router;
