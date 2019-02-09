// importar a classe carroBD
const carroBD = require('./carroBD');

carroBD.getCarroById(11, function(carro){
    console.log(carro.id +':'+ carro.nome);

});

/*
//chamando a funcao de callback na variavel
const carroBD = require('./carroBD');

var callback = function(carro){
    console.log(carro.id +':'+ carro.nome);

    carroBD.getCarroById(11, callback);
}
*/