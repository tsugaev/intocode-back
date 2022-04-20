const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 4100;

app.use(express.json());
app.use(require("./routes"));

mongoose
  .connect("mongodb+srv://Isa:28092002@cluster0.fnkei.mongodb.net/Intocode")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`hello port http://localhost:${port}`);
});
