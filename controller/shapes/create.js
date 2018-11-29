const Shape = require('../../models/shape');

module.exports = async function (req, res) {
  const body = req.body;
  const newShape = new Shape(body);
  try {
    const result = await newShape.save();
    res.json(result);
  }
  catch(e) {
    res.json({errMessage: e.errmsg});
  }
}

// app.post('/shapes', (req, res) => {
  //   const body = req.body;
  //   const newShape = new Shape(body);
  //   newShape.save().then((shape) => {
  //     res.json(shape);
  //   }).catch((err) => {
  //     res.json({errMessage: err.errmsg});
  //   });
  // });

  // app.post('/shapes', async (req, res) => {
  //   const body = req.body;
  //   const newShape = new Shape(body);
  //   try {
  //     const result = await newShape.save();
  //     res.json(result);
  //   }
  //   catch(e) {
  //     res.json({errMessage: e.errmsg});
  //   }
  // });