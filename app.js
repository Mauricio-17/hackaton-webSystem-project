const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// ------- CONFIG --------------------------------
app.set("port", port);

// extra security packages
const helmet = require('helmet');
const cors = require('cors');

// librerias de seguridad
app.use(express.json());
app.use(helmet());
app.use(cors());

// enrutadores
app.get("/", (req, res) => {
    res.status(200).json(object);
});

// gestion de errores
// .....

const object = {
  name: "mauricio",
  age: 22,
  city: "Lima",
};


const setup = () => {
  try {
    app.listen(app.get("port"), () =>
      console.log(`Server listening on port ${app.get("port")}`)
    );
  } catch (error) {
    console.log(error)
  }
};

setup();
