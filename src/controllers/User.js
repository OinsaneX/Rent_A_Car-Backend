const userModel = require("../models/User");
const rentModel = require("../models/Rent");
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const userList = await userModel.find({ deleted: false });
  res.json(userList);
};

userCtrl.createUser = async (req, res) => {
  const {
    name,
    username,
    email,
    identity,
    phone,
    password,
    nacionality,
    country,
    address,
    role,
    pasport,
  } = req.body;
  const userExist = await userModel.find({ username });
  const identityExist = await userModel.find({ identity });

  if (userExist.length > 0) {
    res.json({ errUser: true });
  } else if (identityExist.length > 0) {
    res.json({ errIdentity: true });
  } else {
    const newUser = new userModel({
      name,
      username,
      email,
      identity,
      phone,
      password,
      nacionality,
      country,
      address,
      role,
      pasport,
    });
    await newUser
      .save()
      .then((response) => res.json(response))
      .catch((err) => res.json({ message: err }));
  }
};
userCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    username,
    email,
    identity,
    phone,
    password,
    nacionality,
    country,
    address,
    role,
    pasport,
  } = req.body;
 
    const newUser = new userModel({
      name,
      username,
      email,
      identity,
      phone,
      password,
      nacionality,
      country,
      address,
      role,
      pasport,
    });
    await userModel
      .findByIdAndUpdate(id, { ...newUser })
      .then((response) => res.json(response))
      .catch((err) => res.json({ message: err }));
  }
};

userCtrl.deleteUser = async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndUpdate(id, { deleted: true });
  await rentModel.updateMany({ idUser: id }, { active: false });
  res.json("delete");
};

userCtrl.getUserById = async (req, res) => {
  const id = req.params.id;

  const user = await userModel.findById(id);
  res.json(user);
};

userCtrl.getUserByNameAndPass = async (req, res) => {
  const { username, password } = req.body;

  const userSelected = await userModel.findOne({ username, password });
  res.json(userSelected);
};

userCtrl.convertToDriver = async (req, res) => {
  const { id } = req.params;

  const { experience_years, license, licenseValidation } = req.body;
  try {
    await userModel.findByIdAndUpdate(id, {
      role: "driver",
      experience_years,
      license,
      licenseValidation,
    });
  } catch (error) {
    res.send("err");
  }
};

userCtrl.confirmAccount = async (req, res) => {
  const { id } = req.params;

  try {
    await userModel.findByIdAndUpdate(id, { confirmed: true });
    res.send("updated");
  } catch (err) {
    res.send("error");
  }
};

module.exports = userCtrl;
