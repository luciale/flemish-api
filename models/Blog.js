const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const blogSchema = new Schema({
    Usuario:{
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    },
    Comentario:{
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

module.exports = mongoose.model('blog', blogSchema);
