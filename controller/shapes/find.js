const Shape = require('../../models/shape')

module.exports = async function (req, res) {
  const shapes = await Shape.find()
  res.json(shapes)
}

// app.get('/shapes', (req, res) => {
//   Shape.find().then((shapes) => {
//     res.json(shapes);
//   });
// });