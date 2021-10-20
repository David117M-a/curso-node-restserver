const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const { q } = req.query;
    
    res.status(200).json({
        msg: "get API - controlador",
        q
    });
}

const usuariosPut = (req, res = response) => {
    
    const id = req.params.id;

    res.status(201).json({
        msg: "put API - controlador",
        id
    });
}

const usuariosPost = (req, res = response) => {
    
    const { Name, Age } = req.body;
    
    res.status(201).json({
        msg: "post API - controlador",
        Name, 
        Age
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(201).json({
        msg: "delete API - controlador"
    });
}

const usuariosPatch = (req, res = response) => {
    res.status(201).json({
        msg: "patch API - controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
}