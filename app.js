const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/env.json");
const userRouter = require("./routes/userRoutes.js");
const filmesRouter = require("./routes/filmesRouter.js");
const chekValidation = require('./middlewares/authUser')

const app = express();

app.use(express.json());

app.use("/user", userRouter);
// Professor, não sei se nas aulas o senhor ensinou como criar um banco de dados separado para cada usuário,
// mas infelizmente no meu código não fiz isso. Ele cria o usuário, faz o login gerando o token
// e com esse token o usuário consegue ter acesso aos filmes e edita-los.
app.use("/filmes", chekValidation, filmesRouter);

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
