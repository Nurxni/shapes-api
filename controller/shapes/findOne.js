const Shape = require('../../models/shape')

module.exports = async function (req, res) {
  const name = req.params.name;
  getShape = await Shape.findOne({name: name});
  res.json(getShape);
}


//display specific shape by name
// app.get('/shapes/:name', (req, res) => {
//   const name = req.params.name
//    Shape.findOne({name: name}).then((shape) => {
//      res.json(shape);
//    });
//  });