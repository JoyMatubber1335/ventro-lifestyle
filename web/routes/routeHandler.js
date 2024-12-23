import express from "express";
import VentroBox from "../model/ventroBoxSchema.js"; 

const router = express.Router();

router.post("/create", async (req, res) => {
    console.log(req.body);
  try {
    const ventroBox = new VentroBox(req.body);
    await ventroBox.save();
    res.status(201).send(ventroBox);
  } catch (err) {
    res.status(500).send({
      error: "Failed to create VentroBox document",
      details: err.message,
    });
  }
});

export default router;
