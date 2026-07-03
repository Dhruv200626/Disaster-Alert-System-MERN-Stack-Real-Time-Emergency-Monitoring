const express = require("express");
const router = express.Router();
const Alert = require("../models/Alert");

const { protect, adminOnly } = require("../middleware/auth");
router.post("/", async (req, res) => {
  try {
    const alert = await Alert.create(req.body);

    const io = req.app.get("io");
    io.emit("newAlert", alert);

    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({
      createdAt: -1
    });

    res.json(alerts);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


router.put("/:id" , async (req, res) => {
  try {
    const updatedAlert = await Alert.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedAlert);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});




router.delete("/:id",  async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }

    await Alert.findByIdAndDelete(req.params.id);

    res.json({
      message: "Alert deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

});


module.exports = router;