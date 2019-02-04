//carregando modulos
var http = require("http");
var url = require("url");
var fs = require("fs");

//funcao para ler o arquivo e escrever na response
function readFile(response, file){
    fs.readFile(file, function(err, data){
        //quando ler escreve na response o conteudo do arquivo JSON
        response.end(data);
    });
}

//funcao callback para o servidor http
function callback(request, response){
    response.writeHead(200, {"Content-type": "application/json; charset=utf-8"});

    var parts = url.parse(request.url);
    var path = parts.path;

    //verificando a rota
    if(path == "/carros/classicos"){
        readFile(response, "carros_classicos.json");
    }

    else if(path == "/carros/esportivos"){
        readFile(response, "carros_esportivos.json");
    }

    else if(path == "/carros/luxo"){
        readFile(response, "carros_luxo.json");
    }

    else{
        response.end('rota invalida: ' + parts.path);
    }
}

//servidor http
var server = http.createServer(callback);

server.listen(3000);

console.log("servidor iniciado em: http://localhost:3000/");