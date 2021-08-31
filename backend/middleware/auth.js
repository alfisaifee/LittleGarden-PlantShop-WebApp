import jwt from "jsonwebtoken";
import config from "config";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token)
      return res
        .status(401)
        .json({ msg: "No authentication token, authorization denied." });

    const verified = jwt.verify(token, config.get("jwtsecret"));
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied." });

    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default auth;
