const User = require("../model/model.js");

const newUser = async (req, res, next) => {
  const { name, age, city, pincode, service, number } = req.body;
  try {
    const newData = new User({ name, age, city, pincode, service, number });
    await newData.save();
    const data = await User.find();
    return res.json(data);
  } catch (err) {
    console.log(err.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    const Data = await User.find();
    return res.json(Data);
  } catch (err) {
    console.log(err.message);
  }
};

const getUserByPincode = async (req, res) => {
  const { pincode } = req.params;
  try {
    const usersWithPincode = await User.find({ pincode: parseInt(pincode) });
    res.status(200).json(usersWithPincode);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res, next) => {
  const { name, age, city, pincode, service, number } = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, age, city, pincode, service, number },
      { new: true }
    );
    const data = await User.find();
    return res.json(data);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteUser = async ({ params: { id } }, res, next) => {
  try {
    await User.findByIdAndDelete(id);
    const data = await User.find();
    return res.json(data);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  newUser,
  getUser,
  deleteUser,
  updateUser,
  getUserByPincode,
};
