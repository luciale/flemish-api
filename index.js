const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();


mongoose.connect(
    "mongodb+srv://pepito123:pepito123@cluster0.ejmoj.mongodb.net/flemish_db",
    {
        useNewUrlParser: true,
    }
);
{app.use(express.json());  }
app.use(express.urlencoded({
    extended: true
})); 

console.log(app.get('port'))
 


app.use(cors());

app.use('/',routes());



app.listen(5000, function(){
    console.log('servidor');
});