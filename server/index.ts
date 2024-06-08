import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/www"));

dotenv.config();
const appPort: number = Number(process.env.APP_PORT);

app.get("/*", (req, res) => {
  const path: string = "/www/index.html";
  res.sendFile(path, (err) => {
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
