const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "productApp";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);

    app.get("/products", (req, res) => {
      db.collection("products")
        .find()
        .toArray((err, data) => {
          if (err) res.send("cant fecth products");
          else res.send(data);
        });
    });

    app.post("/products", (req, res) => {
      let newProduct = req.body;
      db.collection("products").insertOne(newProduct, (err, data) => {
        if (err) res.send("cant add products");
        else res.send(data);
      });
    });

    app.put("/products/:id", (req, res) => {
      let editedProduct = req.body;
      let id = ObjectID(req.params.id);
      db.collection("products").findOneAndUpdate(
        { _id: id },
        { $set: { ...editedProduct } },
        (err, data) => {
          if (err) res.send("cant edit products");
          else res.send(data);
        }
      );
    });

    app.delete("/products/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("products").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete products");
        else res.send(data);
      });
    });
  }
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
