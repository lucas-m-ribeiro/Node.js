//carregando modulos
var http = require ("http");
var url = require ("url");

function callback(request, response){
    var parts = url.parse(request.url);
    var path = parts.path;

    response.writeHead(200, {"Content-Type": "aplication/json; charset=utf-8"})
    
    if(path =='/teste'){
        
        //cria um array
        var pessoas = [];

        //cria duas pessoas
        var p1 = {"nome": "lucas", "sobrenome": "ribeiro"};
        var p2 = {"nome": "steve", "sobrenome": "rogers"};

        //adiciona os objetos no array
        pessoas.push(p1);
        pessoas.push(p2);

        //converter o array para Json
        var json = JSON.stringify(pessoas);

        //escrever o JSON na resposta (response) da requisição http
        response.end(json);
    }
    else{
        response.end("rota invalida " + path);
    }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("http://localhost:3000/")