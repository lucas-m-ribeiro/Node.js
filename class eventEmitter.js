//importar o modulo eventEmitter

const EventEmitter = require('events');


//extende todos os metodos da eventemitter com uma classe
class Meuemissor extends EventEmitter(){

}

const emissor = new Meuemissor();
const evento = 'usuario:click'

emissor.on(evento, function(click){
    console.log('usuario clicou', click);
});

emissor.emit(evento, 'clicou na barra de rolagem')

//continuar