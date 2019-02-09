//importa classe carrobd
const carrobd = require('./carroBD');

//objeto carro em json
var carro = {
    id: 31,
    nome:'meu carro',
    tipo:'esportivo'
};

carrobd.update(carro, function(carro){
    console.log("carro atualizado: " + carro.id + ':' + carro.nome);

});

/*
//chamando a funcao de callback na variavel
const carroBD = require('./carroBD');

//objeto carro em json
var carro = {
    id: 31,
    nome:'meu carro',
    tipo:'esportivo'
};

var callback = function(carro){
    console.log("carro atualizado: " + carro.id + ':' + carro.nome);

}
carroBD.update(carro, callback);

*/