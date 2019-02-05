//carregando modulos
var http = require ("http");
var url = require ("url");

function callback(request, response){
    var parts = url.parse(request.url);
    var path = parts.path;

    response.writeHead(200, {"Content-Type": "aplication/json; charset=utf-8"})
    
    if(path =='/teste'){
        
        //cria um objeto pessoa
        var pessoa = {
            'nome': 'lucas',
            'sobrenome': 'ribeiro'
        };

        //converte o objeto string no formato json
        var json = JSON.stringify(pessoa);

        //escreve json na resposta (response) da requisicao http
        response.end(json);
    }

}

var server = http.createServer(callback);

server.listen(3000);

console.log("http://localhost:3000/")