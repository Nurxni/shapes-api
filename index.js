//require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Shape = require('./models/shape');
const app = express();

//initialize body-parser and db connection *resolved deprecated url string parser* 
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/shapes', { useNewUrlParser: true });

//create shapes 
app.post('/shapes', (req, res) => {
  const body = req.body;
  const newShape = new Shape(body);
  newShape.save().then((shape) => {
    res.json(shape);
  }).catch((err) => {
    console.log("ERROR", err);
    res.json({errMessage: err.errmsg});
  });
});

//display all shapes in db
app.get('/shapes', (req, res) => {
  Shape.find().then((shapes) => {
    res.json(shapes);
  });
});

//display specific shape by name
 app.get('/shapes/:name', (req, res) => {
  const name = req.params.name
   Shape.findOne({name: name}).then((shape) => {
     res.json(shape);
   });
 });

 








app.listen(3000, () => console.log(`good to go`));