const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/env.json");
const userRouter = require("./routes/userRoutes.js");
const filmesRouter = require("./routes/filmesRouter.js");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/filmes", filmesRouter);

mongoose
  .connect(config.url)
  .then(
    app.listen(config.porta, () => {
      console.log("On e roteando aqui: ", config.porta);
    })
  )
  .catch((error) => {
    console.log("Deu ruim", error.message);
  });
