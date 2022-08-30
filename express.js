const dotenv = require('dotenv');  // Detecta cambios variables entorno .env
const express = require('express');
const cookieParser = require('cookie-parser');
const { authRoutes } = require('./routes/auth.js');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware Global
app.use(express.json());
app.use(cookieParser());
//

app.get('/values', (req, res) => {
    res.status(200).send({ data: "Respuesta Server GET"});
        console.log(res);
});

app.get('/values/:id/:token/:lang', (req, res)=> {
   const id = req.params.id;
   const query = req.query;
   const params = req.params;
   console.clear();
   console.log(id);
   console.log(params);
   console.log(query);
   res.status(201).send({ data: "Respuesta Server GET:id"});
})

app.post('/values', (req, res) => {  
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.apellido);
    res.status(200).send({ data: "Respuesta Server POST"});
});

app.patch('/values/:id', (req, res) => {  //Solo modifica lo que se solicita a diff de Put
    const id = req.params.id;
    console.log(id);
    console.log(req.body.nombre, req.body.apellido, req.body.ciudad);
    res.status(200).send({ data: "Respuesta Server PUT:id"});
});

app.delete('/values/:id', (req, res) => {
    const idDelete = req.params.id;
    console.log(idDelete);
    res.status(200).send({ data: "Respuesta Server DELETE"});
});

app.use('/auth', authRoutes);


app
.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})