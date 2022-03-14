const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM manufacturing", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    console.log(req.body);

    conn.query("INSERT INTO manufacturing set ? ", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.json("Orden insertada");
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    console.log(req.body);

    conn.query(
      "DELETE FROM manufacturing WHERE id = ?",
      [req.params.id],
      (err) => {
        if (err) return res.send(err);

        res.json("La orden fue eliminada");
      }
    );
  });
});

routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    console.log(req.body);

    conn.query(
      "UPDATE manufacturing set ? WHERE id  = ?",
      [req.body, req.params.id],
      (err) => {
        if (err) return res.send(err);

        res.json("Solicitud actualizada");
      }
    );
  });
});
module.exports = routes;
