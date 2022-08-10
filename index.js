const express = require("express");
const bodyParser=require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const producto = [
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
    },
  ];
  


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


   app.get('/producto', function (req, res) {

    if(producto.id === '' || producto.nombre=== '') {
     respuesta = {
      error: true,
      codigo: 501,
      mensaje: 'No existen productos creados'
     };
    } else {
     respuesta =producto
     
    }
    res.send(respuesta[0]);
   });


   app.post('/usuario', function (req, res) {
    if(!req.body.nombre || !req.body.apellido) {
     respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo nombre y apellido son requeridos'
     };
    } else {
     if(usuario.nombre !== '' || usuario.apellido !== '') {
      respuesta = {
       error: true,
       codigo: 503,
       mensaje: 'El usuario ya fue creado previamente'
      };
     } else {
      usuario = {
       nombre: req.body.nombre,
       apellido: req.body.apellido
      };
      respuesta = {
       error: false,
       codigo: 200,
       mensaje: 'Usuario creado',
       respuesta: usuario
      };
     }
    }
    
    res.send(respuesta);
   });


   app.put('/usuario', function (req, res) {
    if(!req.body.nombre || !req.body.apellido) {
     respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo nombre y apellido son requeridos'
     };
    } else {
     if(usuario.nombre === '' || usuario.apellido === '') {
      respuesta = {
       error: true,
       codigo: 501,
       mensaje: 'El usuario no ha sido creado'
      };
     } else {
      usuario = {
       nombre: req.body.nombre,
       apellido: req.body.apellido
      };
      respuesta = {
       error: false,
       codigo: 200,
       mensaje: 'Usuario actualizado',
       respuesta: usuario
      };
     }
    }
    
    res.send(respuesta);
   });
   app.delete('/usuario', function (req, res) {
    if(usuario.nombre === '' || usuario.apellido === '') {
     respuesta = {
      error: true,
      codigo: 501,
      mensaje: 'El usuario no ha sido creado'
     };
    } else {
     respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Usuario eliminado'
     };
     usuario = { 
      nombre: '', 
      apellido: '' 
     };
    }
    res.send(respuesta);
   });
   app.use(function(req, res, next) {
    respuesta = {
     error: true, 
     codigo: 404, 
     mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
   });


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});