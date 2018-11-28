//require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Shape = require('./models/shape');
const app = express();

//initialize body-parser and db connection *resolved deprecated url string parser* 
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/shape', { useNewUrlParser: true });

//create shapes 
app.post('/shapes', async (req, res) => {
  const body = req.body;
  const newShape = new Shape(body);

  try {
    const result = await newShape.save();
    res.json(result);
  }
  catch(e) {
    res.json({errMessage: e.errmsg});
  }
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

 //calculate perimeter using length
 app.post('/perimeter', (req, res) => {
   const {length, shape} = req.body;
   let sides = 1;
   if (shape === 'triangle') {
     sides = 3;
   }
  //  else if (shape === 'square') {
  //   sides = 4;
  //  }

   const perimeter = sides * length;
   res.json({
     shape,
     sides,
     perimeter
   })

 });




app.listen(3000, () => console.log(`good to go`));