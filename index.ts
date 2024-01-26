import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//dotEnv Config
dotenv.config();
let PORT = process.env.PORT || 8080;

// create express app
const app = express();

//cors
app.use(cors());
console.log("hello world!");

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
