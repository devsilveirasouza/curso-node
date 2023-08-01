// IMPORTANDO O EXPRESS
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const mysql = require("mysql"); // https://github.com/mysqljs/mysql npm install mysqljs/mysql

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodejsdb",
});
// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// GET DATA
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});
// DATA SAVE
app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("ou have registred successfully!");
      }
    }
  );
});
// GET DATA FOR ID
app.get("/userdetails/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// DATA UPDATE
app.put("/userupdate/:id", (req, res) => {
  const userId = req.params.id;
  const q =
    "UPDATE users SET `name`= ?, `email`= ?, `password`= ? WHERE id = ?";

  const values = [req.body.name, req.body.email, req.body.password];

  db.query(q, [...values, userId], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(data);
    }
  });
});
// DATA DELETE
app.delete("/userdelete/:id", (req, res) => {
  const userId = req.params.id;
  const q = " DELETE FROM users WHERE id = ? ";

  db.query(q, [userId], (err, data) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
