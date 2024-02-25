const router = require("express").Router();
const usersController = require("../controllers/users");
const authMiddleWare = require("../middlewares/auth");

router.post("/", authMiddleWare.generateJWT);
router.post("/addusers", usersController.newUser);
router.get("/getusers", authMiddleWare.checkJWT, usersController.getUser);
router.get(
  "/getusers/:pincode",
  authMiddleWare.checkJWT,
  usersController.getUserByPincode
);
router.put("/updateusers/:id", usersController.updateUser);
router.delete("/deleteusers/:id", usersController.deleteUser);

module.exports = router;
