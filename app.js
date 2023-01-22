const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

const usersRouter = require("./routes/UserRoutes");
//configure mongoose
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

//middleware
app.use(express.json());
 
app.use("/api/users", usersRouter);
 
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

module.exports = app;