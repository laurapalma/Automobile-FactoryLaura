const express = require("express");
const mysql = require("mysql");
const myconnection = require("express-myconnection");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "automobilefactory",
};

//middlewares
app.use(myconnection(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("welcome to my API");
});

app.use("/api", routes);

//server running
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
