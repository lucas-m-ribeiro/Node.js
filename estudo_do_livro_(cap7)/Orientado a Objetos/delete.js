//importa classe carroBD
const carroBD = require('./carroBD');

//objeto carro em json para excluir precisamos apenas do ID
var carro = {
    id: 31,
};

carroBD.delete(carro, function(carro){
    console.log('carro excluido com sucesso ' + carro.id);
});

/*
//chamando a funcao de callback na variavel
const carroBD = require('./carroBD');

var carro = {
    id: 31,
};

var callback = function(carro){
    console.log('carro excluido com sucesso ' + carro.id);
}
carroBD.delete(carro, callback);
*/