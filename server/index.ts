import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/www"));

dotenv.config();
const appPort: number = Number(process.env.APP_PORT);

app.get("/*", (req, res) => {
  // let joinedPath: string = path.join(__dirname, "/www/index.html");
  res.sendFile("/www/index.html", (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

(async () => {
  app.listen(appPort, () => {
    console.log(`Server is running on port: ${appPort}`);
  });
})();
