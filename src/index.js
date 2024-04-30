const express = require ('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/stock");

const app = express();

app.use(express.json());
app.use("/api" , userRoute);

app.get("/", (req, res) => {
    res.send("prueba uno");
  });

  mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

  
app.listen(5500, () => console.log("Server listening to", 5500));