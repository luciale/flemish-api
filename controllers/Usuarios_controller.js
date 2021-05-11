const Usuarios = require('../models/Usuarios');

//Listar elementos
exports.list = async(req, res) => {
    console.log("PROBANDO GET")
    try{
        const usuarios = await Usuarios.find({});
        res.json(usuarios);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
    
};


exports.create = (req, res) => {
   console.log('POST');
   console.log(req.body);

   let usuarios = new Usuarios()
   usuarios.Usuario= req.body.Usuario;
   usuarios.Nombre= req.body.Nombre;
   usuarios.Correo = req.body.Correo;
   usuarios.Contraseña = req.body.Contraseña;

   usuarios.save((err, usuariosStored)=>{
       if(err) res.status(500).send({message: 'ERROR'})
       res.status(200).send({usuarios: usuariosStored});
   })
  };

  exports.show = async(req, res, next) => {
      console.log("PROBANDO GET ID")
     
      try{
        const usuarios= await Usuarios.findOne({ Usuario: req.params.usuario});
        if(!usuarios){
            res.status(404).json({
                message: "El cliente no existe"
            });
        }
        console.log(usuarios);
        res.json(usuarios);
      }catch(error){
          res.status(400).json({
              message: "Error"
          });

      }
  }

  exports.update = async(req, res, next) =>{
      console.log('PROBANDO UPDATE')
      try{
          const usuarios= await Usuarios.findOneAndUpdate(
              {Usuario: req.params.usuario},
              req.body,
              {new: true});
              res.json({
                  message: 'Usuario actualizado'
              });
      }catch(error){
            res.status(400).json({
                message: 'ERROR'
            });
      }
  }

  exports.delete = async(req, res, next) =>{
      try{
        await Usuarios.findOneAndDelete({Usuario: req.params.usuario});
        res.json({message: 'Usuario eliminado'});
      }catch(error){
        res.status(400).json({
            message: 'Error'
        });
      }
  }