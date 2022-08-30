const { USERS_BBDD: BD } = require('../data/db.js');
const authRoutes = require('express').Router();


// Endpoint publico
authRoutes.get('/public', (req,res)=>{
    res.status(200).send('Endpoint publico');
});

// Endpoint autenticado
authRoutes.post('/autenticado', (req,res)=>{
    const {email, password} = req.body;

    if(!email || !password)  return res.sendStatus(400); // BadRequest
    else
    {
        try{
            const validaUserDB = BD.find(resp => resp.email === email)
            //console.log("user: ",validaUserDB.email);
            //console.log("user: ",validaUserDB.password);
            if(!validaUserDB) return res.sendStatus(401); // 401 NO AUTENTICADO

            if(validaUserDB.password !== password) return res.sendStatus(401);

            return res.send(`Bienvenido: ${email} autenticado` );

        }catch(err){
            return res.sendStatus(401);
        }
    }
});


// Endpoint autorizado
authRoutes.post('/autorizado', (req, res) => {
    const {email, password} = req.body;

    if(!email || !password)  return res.sendStatus(400); // BadRequest
    else
    {
        try{
            const validaUserDB = BD.find(resp => resp.email === email);

            if(!validaUserDB) return res.sendStatus(401); // 401 NO AUTENTICADO

            if(validaUserDB.password !== password) return res.sendStatus(401);
            //console.log(validaUserDB.roles);
            const role = validaUserDB.roles.find(role => role === "admin");
            console.log(role);
            if(!role) return res.sendStatus(403); //Forbidden NO AUTORIZADO
            
            return res.send(`Usuario ADMIN`);

        }catch(err){
            return res.sendStatus(401);
        }
    }

});



module.exports = { authRoutes }