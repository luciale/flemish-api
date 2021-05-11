const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const productosSchema = new Schema({
    Codigo:{
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
    Color:{
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: false,
    },
    Marca:{
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    },
    Precio:{
        trim: true,
        type: Number,
        index: true,
        unique: false,
        required: true,
    },
    Descripcion:{
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

module.exports = mongoose.model('productos', productosSchema);
