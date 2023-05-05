const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/index.js");
const restaurantsRoutes = require("./routes/restaurants.routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/restaurants", restaurantsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
