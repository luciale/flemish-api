const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const usuariosSchema = new Schema({
    Usuario:{
        trim: true,
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    Nombre:{
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    },
    Correo:{
        trim: true,
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    Contraseña:{
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    }
},
{
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  });

module.exports = mongoose.model('usuarios', usuariosSchema);
