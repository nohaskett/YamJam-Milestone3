let express = require("express");
let app = new express();
app.set("view engine","ejs");
// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"yamjam-db.ctk8kygsc2eq.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database:"yamjams",
  port: 3306,
 },
});
app.get("/",(req,res) => {
 knex
 .select()
 .from("jam")
 .then((result) => {
  console.log(result);
  res.render("index",{aJamList:result});
 });
});
app.listen(3000);
