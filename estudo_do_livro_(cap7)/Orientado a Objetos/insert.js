//importar a classe carroBD
const carroBD = require('./carroBD');

//objeto carro em json
var carro = {
    nome:'meu carro',
    tipo:'esportivo'
};

carroBD.save(carro, function(carro){
    console.log("carro salvo" + carro.id+ ':' + carro.nome);

});

/*
//chamando a funcao de callback na variavel
const carroBD = require('./carroBD');

//objeto carro em json
var carro = {
    nome:'meu carro',
    tipo:'esportivo'
};

var callback = function(carro){
    console.log("carro salvo" + carro.id+ ':' + carro.nome);

}

carroBD.save(carro, callback);
*/