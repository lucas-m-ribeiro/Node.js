//carrega modulos
var http = require("http");
var url = require("url");

//funcao de callback para o servidor
var callback = function(request, response){

    //cabeçalho com o tipo de resposta a ser retornado
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});

    //faz o parse da URL separando o caminho
    var parts = url.parse(request.url);

    //verifca o caminho
    if(parts.path == '/'){
        response.end('site na raiz.');
    }
    else if(parts.path == '/carros'){
        response.end('voce digitou a rota /carros');
    }
    else{
        response.end('rota invalida: ' + parts.path);
    }
}

// criando um servidor para responder as requisicoes

var server = http.createServer(callback);

server.listen(3000);

console.log("servidor iniciado em http://localhost:3000/");

