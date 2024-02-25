const jwt = require("jsonwebtoken");

const generateJWT = (req, res) => {
  const payload = {
    sessionId: req.body.sessionId,
  };
  const expiresIn = "1h";
  if (payload.sessionId) {
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn,
      });
      return res.status(200).json({ token, type: "Bearer" });
    } catch (err) {
      console.log(err.message);
    }
  } else {
    return res
      .status(404)
      .json({ message: "Please pass sessionId to continue!" });
  }
};

const checkJWT = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(400).json({ error: "Unauthorized Access" });
  }
  next();
};

module.exports = {
  generateJWT,
  checkJWT,
};
