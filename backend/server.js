const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/user");
const progressRoutes = require("./routes/progress");
const studentRoutes = require("./routes/student");
const teacherRoutes = require("./routes/teacher");

const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connection to MongoDB successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/progress", progressRoutes);
