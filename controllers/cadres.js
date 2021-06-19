const mongoose = require('mongoose');
const { SERVER_ERROR } = require('../utils/constants');

const Cadre = mongoose.model('cadre');

exports.getCadres = async (req, res) => {
  try {
    const cadres = await Cadre.find();
    res.send(cadres);
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
};

exports.getCadre = async (req, res) => {
  const { id } = req.params;
  try {
    const cadre = await Cadre.findById(id);
    res.send(cadre);
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
};

exports.createNewCadre = async (req, res) => {
  const { cadreName, deductions } = req.body;
  try {
    const newCadre = new Cadre({
      cadreName,
      deductions
    });
    await newCadre.save();
    res.send({ success: true, message: 'New cadre created' });
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
};
