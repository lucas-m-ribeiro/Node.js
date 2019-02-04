//carregando modulos
var net = require('net');

//contador de testes

var count = 1;

//listener do servidor TCP quando cliente conectar
var server = net.createServer(function(socket){
    console.log("cliente conectou do IP: " + socket.remoteAddress);
    socket.end("hello wolrd TCP " + (count++)+ "\n");
});

//iniciar servidor
server.listen(3000, "localhost");
console.log("servidor tcp inciado...");


