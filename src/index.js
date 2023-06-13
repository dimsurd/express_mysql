require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const logRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});

app.use(logRequest);

// Allowing static file
app.use("/assets/images", express.static("public/images"));
// End Allowing static file

// Allowing JSON to parse in body
app.use(express.json());
// End Allowing JSON to parse in body

app.use("/users", usersRoute);

app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
  });
});
