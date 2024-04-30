const express = require ("express");
const userSchema = require("../esquemas/stock");

const router = express.Router();

router.post("/stock", (req, res) => {
    const stock = userSchema(req.body);
    stock
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/stock/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  
  router.delete("/stock/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  
  router.put("/stock/:id", (req, res) => {
    const { id } = req.params;
    const { producto , precio } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { producto, precio} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
module.exports = router;