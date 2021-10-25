const driverModelForm = require("../models/DriverForm");
const driverFormCtrl = {};

driverFormCtrl.getDriverForms = async (req, res) => {
  const driverList = await driverModelForm.find({ deleted: false });
  res.json(driverList);
};

driverFormCtrl.getDriverFormById = async (req, res) => {
  const { id } = req.params;

  const dataForm = await driverModelForm.findById(id);
  res.json(dataForm);
};
driverFormCtrl.deleteDriverFormById = async (req, res) => {
  const { id } = req.params;

  await driverModelForm.findByIdAndUpdate(id, { deleted: true });
  res.json("deleted");
};

driverFormCtrl.createDriverForm = async (req, res) => {
  const {
    name,
    email,
    identity,
    phone,
    nacionality,
    country,
    address,
    experience_years,
    license,
    licenseValidation,
    curriculum,
    licenseUrl,
    idUser,
  } = req.body;

  const newDriverForm = new driverModelForm({
    name,
    email,
    identity,
    phone,
    nacionality,
    country,
    address,
    curriculum,
    experience_years,
    license,
    licenseValidation,
    licenseUrl,
    idUser,
  });
  await newDriverForm
    .save()
    .then((response) => res.json({ message: response }))
    .catch((err) => res.json({ message: err }));
};

module.exports = driverFormCtrl;
