const Shape = require('../../models/shape');

module.exports =  async function(req,res){
  const name = req.body.name;
  const length = req.body.length;
  let perimeter = 0;
  try {
      getShape = await Shape.findOne({name: name})
      console.log(getShape)
      } catch (e) {
        res.json({errMessage: e.errmsg});
      }
  if (getShape){
      let sides = getShape.numberOfSides;
      console.log(sides)
      perimeter = sides * length;
      res.json({
        name,
        sides,
        perimeter
      });
      console.log(perimeter);
  } else {
      res.json({errMsg});
  }
}



//calculate perimeter using length
//  app.post('/perimeter', (req, res) => {
//   const name = req.body.name;
//   console.log(name);
//   const length = Number(req.body.length);
//   console.log(length);
//   let perimeter = 0;
//   const getShape = Shape.findOne({name: name});
//   console.log(getShape);
//   if (getShape) {
//     let sides = Number(getShape.numberOfSides);
//     console.log(sides);
//     let perimeter = sides * length;
//     console.log(perimeter);
//     res.json(perimeter);
//   }
//   else {res.json(err)} 
//  });

// app.post('/perimeter', (req, res) => {
//    const {length, shape} = req.body;
//    let sides = 1;
//    if (shape === 'triangle') {
//      sides = 3;
//    }
//    else if (shape === 'hexagon') {
//     sides = 6;
//    }
//    const perimeter = sides * length;
//    res.json({
//      shape,
//      sides,
//      perimeter
//    });
//  });