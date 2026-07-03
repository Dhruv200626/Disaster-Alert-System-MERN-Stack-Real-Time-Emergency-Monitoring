const Alert = require("../models/Alert");

const createAlert = async (req, res) => {
  try {
    const newAlert = await Alert.create(req.body);

    const io = req.app.get("io");

    io.emit("newAlert", newAlert);

    res.status(201).json(newAlert);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAlert,
};