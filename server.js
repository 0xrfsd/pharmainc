const express = require("express");
const axios = require("axios");
const cron = require("node-cron");

require("./database");

const User = require("./userModel");

const porta = 3333;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const url = "https://www.randomuser.me/api/";

const userAmount = 3;

const Importar = () => {
  axios
    .get(`${url}/?results=${userAmount}`)
    .then((response) => {
      const arr = response.data.results;
      User.insertMany(arr, (err, docs) => {
        err ? console.error(err) : console.log(docs);
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() => {
      // always executed
    });
};

cron.schedule(
  "00 17 * * *",
  () => {
    Importar();
  },
  {
    scheduled: true,
    timezone: "America/Sao_Paulo",
  }
);

app.put("/users/:userId", async (req, res) => {
  try {
    const key = Object.keys(req.query);
    const value = Object.values(req.query);
    const filter = { _id: req.params.userId };

    const a = key[0];
    const b = value[0];

    const update = { [a]: b };

    await User.findOneAndUpdate(filter, update, {useFindAndModify: true});

    res.send({ Message: "Atualizado com sucesso" });
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
      status: req.body.status,
    });
    await user.save();
    res.send({ message: "Usuario criado com sucesso!" });
  } catch (e) {
    console.error(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    await User.find({}, (err, docs) => {
      err ? console.error(err) : res.json(docs);
    });
  } catch (e) {
    console.error(e);
  }
});

app.get("/users/:userId", async (req, res) => {
  try {
    await User.find({ _id: req.params.userId }, (err, docs) => {
      err ? console.error(err) : res.json(docs);
    });
  } catch (e) {
    console.error(e);
  }
});

app.delete("/users/deleteAll", async (req, res) => {
  try {
    User.deleteMany({}, (err, docs) => {
      err ? console.error(err) : console.log(docs);
    });

    res.send({ Message: "Sucessfully deleted!" });
  } catch (e) {
    console.error(e);
  }
});

app.delete("/users/:userId", async (req, res) => {
  try {
    const { userId } = req.params.userId;

    await User.findOneAndDelete(userId);

    return res.status(200).json({ User: "Successfully deleted" });
  } catch (e) {
    return res.json({ Erro: e });
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
