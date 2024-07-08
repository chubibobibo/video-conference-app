import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(cors);
app.use(express.json()); /** parse json data */
app.use(bodyParser.json());

/** error middleware for page not found */
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Page not found" });
});

/** middleware to handle errors for all requests */
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 400;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`LISTENING TO SERVER ${process.env.PORT}`);
});
