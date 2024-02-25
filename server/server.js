const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/users");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = 8080;
dotenv.config();
app.use(
  cors({
    origin: "*", // use your actual domain name (or localhost), using * is not recommended
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
  })
);
app.use(express.json());

app.use("/", routes);

const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected"))
  .catch((err) => {
    console.log(`Database connection error: ${err.message}`);
    process.exit(1);
  });

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
