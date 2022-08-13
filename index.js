require('dotenv').config();


const express = require("express");
const mongoose=require("mongoose");

const mongoDBenv=process.env.DATABASE_URL;

const Model = require('./model/model');

mongoose.connect(mongoDBenv);
const database=mongoose.connection;

const bodyParser=require("body-parser")

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

database.on("error",(error)=>{
  console.log(error);
});

database.once('connected',()=>{
  console.log("Conectado a mongoDB")
});

/* const producto = [
    {
      id: 1,
      name: "Camiseta Puma",
      colors: ["red", "gray", "black", "blue "],
      price: 180,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 2,
      name: "Sudadera Nike",
      colors: ["red", "gray", "black", "blue "],
      price: 100,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 3,
      name: "Polera City",
      colors: ["red", "gray", "black", "blue "],
      price: 150,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 4,
      name: "Short Adidas",
      price: 160,
      colors: ["red", "gray", "black", "blue "],
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 5,
      name: "Camiseta Puma",
      colors: ["red", "gray", "black", "blue "],
      price: 180,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 6,
      name: "Sudadera Nike",
      colors: ["red", "gray", "black", "blue "],
      price: 100,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 7,
      name: "Polera City",
      colors: ["red", "gray", "black", "blue "],
      price: 150,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 8,
      name: "Short Adidas",
      colors: ["red", "gray", "black", "blue "],
      price: 160,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 9,
      name: "Camiseta Puma",
      colors: ["red", "gray", "black", "blue "],
      price: 180,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 10,
      name: "Sudadera Nike",
      colors: ["red", "gray", "black", "blue "],
      price: 100,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 11,
      name: "Polera City",
      colors: ["red", "gray", "black", "blue "],
      price: 150,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    },
    {
      id: 12,
      name: "Short Adidas",
      colors: ["red", "gray", "black", "blue "],
      price: 160,
      quantity: 1,
      imageSrc:
        "https://res.cloudinary.com/daobmfotr/image/upload/v1657863864/e-commerce-x/argentina_iltkio.webp",
    }
  ]; */
  


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


/*    app.get('/productos', function (req, res) {

    if(producto.id === '' || producto.nombre=== '') {
     respuesta = {
      error: true,
      codigo: 501,
      mensaje: 'No existen productos creados'
     };
    } else {
     respuesta =producto
     
    }
    res.send(respuesta);
   }); */

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





app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});