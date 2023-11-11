import app from "./app";
const PORT = 2222;

(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})();
