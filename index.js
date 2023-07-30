// IMPORTANDO O EXPRESS
const express = require('express')
const app = express()

const port = 3000

app.use(express.json());

const mysql = require("mysql"); // https://github.com/mysqljs/mysql npm install mysqljs/mysql

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'nodejsdb'
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })