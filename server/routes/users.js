const express = require("express");
const router = require("express").Router();
const usersController = require("../controllers/users");
const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return res.status(400).json({ error: "Unauthorized Access" });
  }
  next();
};

router.post("/", usersController.generateJWT);
router.post("/addusers", usersController.newUser);
router.get("/getusers", authMiddleWare, usersController.getUser);
router.get(
  "/getusers/:pincode",
  authMiddleWare,
  usersController.getUserByPincode
);
router.put("/updateusers/:id", usersController.updateUser);
router.delete("/deleteusers/:id", usersController.deleteUser);

module.exports = router;
