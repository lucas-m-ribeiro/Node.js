//carregando o modulo http
var http = require("http");

//criando um servidor http para responder todas as requisicoes
var server = http.createServer(function(request, response){

    //aqui podemos definir o tipo da resposta que sera retornado(neste exemplo sera um txt, pode ser outros tipos)
    response.writeHead(200, {"Content-Type": "text/plain"});

    //mensagem de retorno
    response.end("Testando meu primeiro servidor http\n");

});

//porta em que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log("servidor iniciado em http://localhost:3000/");