const Blog = require('../models/Blog');

//Listar elementos
exports.list = async(req, res) => {
    try{
        const blog = await Blog.find({});
        res.json(blog);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
    
};


exports.create = (req, res) => {
   console.log('POST');
   console.log(req.body);

   let blog = new Blog()
   blog.Usuario= req.body.Usuario;
   blog.Comentario= req.body.Comentario;
   blog.save((err, blogStored)=>{
       if(err) res.status(500).send({message: 'ERROR'})
       res.status(200).send({blog: blogStored});
   })
  };



  