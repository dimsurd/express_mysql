require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const logRequest = require("./middleware/logs");

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});

app.use(logRequest);

// Allowing JSON to parse in body
app.use(express.json());
// End Allowing JSON to parse in body

app.use("/users", usersRoute);
