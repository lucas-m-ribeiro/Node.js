//carregando modulos
var http = require ("http");
var url = require ("url");

function callback(request, response){
    var parts = url.parse(request.url);
    var path = parts.path;

    response.writeHead(200, {"Content-Type": "aplication/json; charset=utf-8"})
    if(path == '/teste'){
        response.end("{\"nome\":\"lucas\",\sobrenome\":\"ribeiro\"}");
    }
    else{
        response.end("rota invalida " + path);
    }
}

var server = http.createServer(callback);

server.listen(3000);

console.log("http://localhost:3000/")