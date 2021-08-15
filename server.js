const express = require("express");
const request = require("request");
const cron = require("node-cron");

require("./database");

const User = require("./userModel");

const porta = 3333;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// criar esquema de usuario com mongoose createSchema
// manter todos parametros dos dados que estamos puxando =+ 2
// passar parametro imported_t recebendo New Date()
// passar parametro status do tipo Enum recebendo os possiveis valores = ['draft', 'trash', 'publicado']

// gender
// name
// location
// email
// login
// dob
// registered
// phone
// cell
// id_
// picture
// nat
// status

const url = "https://www.randomuser.me/api/";

const Atualizador = () => {
  request(url, async (req, res) => {
    try {
      console.log(res.body);
    } catch (e) {
      console.error(e);
    }
  });
};

cron.schedule("09 05 * * * ", () => {
  Atualizador();
});

app.put("/users/:userId", async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    console.error(e);
  }
});

app.post("/addUser", async (req, res) => {
  try {

    const user = new User({
      gender: req.body.gender,
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      login: req.body.login,
      dob: req.body.dob,
      registered: req.body.registered,
      phone: req.body.phone,
      cell: req.body.cell,
      id_: req.body._id,
      picture: req.body.picture,
      nat: req.body.nat,
      status: req.body.status
    })
    await user.save();
    res.send({"message": "Usuario criado com sucesso!"})

  } catch (e) {
    console.error(e);
  }
});

app.get("/", async (req, res) => {
  try {
    res.send({ message: "welcome to my server" });
  } catch (e) {
    console.warn(e);
  }
});

app.listen(porta, () => console.log(`Servidor rodando na porta:`, porta));
