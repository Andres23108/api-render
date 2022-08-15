require('dotenv').config();

const cors=require("cors");
const express = require("express");
const mongoose=require("mongoose");

const mongoDBenv=process.env.DATABASE_URL;
const port=process.env.PORT;

const Model = require('./model/model');

mongoose.connect(mongoDBenv);
const database=mongoose.connection;

const bodyParser=require("body-parser")

const app = express();
app.use(cors({
  origin: '*'
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

database.on("error",(error)=>{
  console.log(error);
});

database.once('connected',()=>{
  console.log("Conectado a mongoDB")
});


  let respuesta={
    error: false,
    codigo: 200,
    mensaje:''
  };

  app.get('/', function(req, res) {
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Servidor Activo'
    };
    res.send(respuesta);
   });



   app.get('/productos', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


   app.post('/postProducto', async (req, res) => {
    const data = new Model({
        id: req.body.id,
        name: req.body.name,
        sizes: req.body.sizes,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        imageSrc: req.body.imageSrc
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});





app.listen(port, () => {
 console.log("El servidor está inicializado en el puerto "+port);
});