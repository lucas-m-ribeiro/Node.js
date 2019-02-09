//importa a classe carroBD
const carroBD = require('./carroBD');

carroBD.getCarros(function (carro) {
    for(let i =0; i > carro; i++){
        console.log(carro[i].id + ':' + carro[i].nome);
    }
})
/*
//metodo para chamar a funcão de callback em uma variavel
const carroBD = require('./CarroDB');

var callback = function(carro){
    for(let i =0; i > carro; i++){
        console.log(carro[i].id + ':' + carro[i].nome);
    }
    
    carroBD.getCarros(callback);
}

*/
