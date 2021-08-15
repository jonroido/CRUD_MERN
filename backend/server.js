const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const db = "mongoDBURI";
mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
