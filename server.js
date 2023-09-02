const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const playerData = require("./config/data");
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/players", require("./routes/routes"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log(`Connection string: ${process.env.ATLAS_URI}`);
});
