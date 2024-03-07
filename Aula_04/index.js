const express = require('express');

const ip = '127.0.0.1';

const port = '8080';

const server = express();


server.listen(port, ip, function(req, res){
    console.log('Servidor está no ar')
});

let cliente = {
    nome: 'Gabriel Ardohain',
    saldo: 10000
}

server.get('/consultar-saldo', function(req, res){
    return res.json(
        {'nome' : cliente.nome, 'saldo' : cliente.saldo}
        );
})

server.get('/pagar/:valor', function(req, res){
    let valorPagar = req.params.valor;
    //console.log('valor:', valorPagar)
    let retorno = {
        saldo: 'Inválido'
    }

    if (cliente.saldo > valorPagar) {
    cliente.saldo = cliente.saldo - valorPagar;
    
    //console.log('Saldo atual:', cliente.saldo);

    return res.json(
        {'Saldo atual' : cliente.saldo}
    )
    } else {
        return res.json({'Status:' : retorno.saldo})
    }
})
