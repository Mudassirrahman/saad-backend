const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const rolesRoutes = require("./routes/rolesRoutes");
const instructorRoutes = require("./routes/instructorRoutes")
const userRoutes = require("./routes/userRoutes");

// creating app
const app = express();

// calling the db
connectToDB();

// for allowing the region to accept the server
app.use(
  cors({
    origin: [
      "https://saad-frontend.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5000",
    ],
  })
);

// for parsing data to json
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/admin", rolesRoutes);
app.use("/user", userRoutes);
app.use("/instructor", instructorRoutes);
app.get("/", (req, res) => res.send("Server is running"));


// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app