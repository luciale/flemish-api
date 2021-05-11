const Productos = require('../models/Productos');

//Listar elementos
exports.list = async(req, res) => {
    try{
        const productos = await Productos.find({});
        res.json(productos);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
    
};


exports.create = (req, res) => {
   console.log('POST');
   console.log(req.body);

   let productos = new Productos()
   productos.Codigo= req.body.Codigo;
   productos.Nombre= req.body.Nombre;
   productos.Color = req.body.Color;
   productos.Marca = req.body.Marca;
   productos.Precio = req.body.Precio;
   productos.Descripcion = req.body.Descripcion;

   productos.save((err, productosStored)=>{
       if(err) res.status(500).send({message: 'ERROR'})
       res.status(200).send({productos: productosStored});
   })
  };

  exports.show = async(req, res, next) => {
      console.log("PROBANDO GET ID")
      try{
        const productos= await Productos.findOne({ Codigo: req.params.codigo});
        if(!productos){
            res.status(404).json({
                message: "El producto no existe"
            });
        }
        res.json(productos);
      }catch(error){
          res.status(400).json({
              message: "Error"
          });

      }
  }

  exports.update = async(req, res, next) =>{
      console.log('PROBANDO UPDATE')
      try{
          const productos= await Productos.findOneAndUpdate(
              {Codigo: req.params.codigo},
              req.body,
              {new: true});
              res.json({
                  message: 'Producto actualizado'
              });
      }catch(error){
            res.status(400).json({
                message: 'ERROR'
            });
      }
  }

  exports.delete = async(req, res, next) =>{
      try{
        await Productos.findOneAndDelete({Codigo: req.params.codigo});
        res.json({message: 'Producto eliminado'});
      }catch(error){
        res.status(400).json({
            message: 'Error'
        });
      }
  }