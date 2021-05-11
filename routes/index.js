const express = require('express');
const router = express.Router();
const Usuarios_controller = require('../controllers/Usuarios_controller');
const Productos_controller = require('../controllers/Productos_controller');
const Blog_controller = require('../controllers/Blog_controller');
module.exports = function(){
    router.post('/usuarios',Usuarios_controller.create);
    router.get('/usuarios',Usuarios_controller.list);
    router.get('/usuarios/:usuario',Usuarios_controller.show);
    router.put('/usuarios/:usuario', Usuarios_controller.update);
    router.delete('/usuarios/:usuario', Usuarios_controller.delete);
    //PRODUCTOS
    router.post('/productos',Productos_controller.create);
    router.get('/productos',Productos_controller.list);
    router.get('/productos/:codigo',Productos_controller.show);
    router.put('/productos/:codigo', Productos_controller.update);
    router.delete('/productos/:codigo', Productos_controller.delete);
    //BLOG
    router.post('/blog',Blog_controller.create);
    router.get('/blog',Blog_controller.list);
    return router;
};