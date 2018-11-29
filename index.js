//require dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Shape = require('./models/shape');
const app = express();

//initialize body-parser and db connection
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/shape', { useNewUrlParser: true });


//require controllers
const findOneShape = require('./controller/shapes/findOne');
const findPerimeter = require('./controller/shapes/perimeter');
const createShape = require('./controller/shapes/create');
const findShapes = require('./controller/shapes/find');

//execute controls
app.post('/shapes', createShape);
app.get('/shapes', findShapes);
app.get('/shapes/:name', findOneShape);
app.post('/shapes/perimeter', findPerimeter);


app.listen(3000, () => console.log(`good to go`));