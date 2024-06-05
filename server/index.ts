import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/www"));

dotenv.config();
const appPort: number = Number(process.env.APP_PORT);

(async () => {
  app.listen(appPort, () => {
    console.log(`Server is running on port: ${appPort}`);
  });
})();
