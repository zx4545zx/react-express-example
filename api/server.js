const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database/db");

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/:id", (req, res) => {
    const id = req.params.id
    db.query("SELECT * FROM user WHERE id=?", id, (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
