//carregando modulos 
const http = require('http');
const url = require('url');

//importando a classe carrpbd
const carrobd = require('./carrobd');

//consulta carro pelo tipo e retorna JSON como reposta
function getCarros(response, tipo){
    
    //buscando carros no banco 
    carrobd.getCarrosByTipo(tipo, function(carros){
        
        //converte o array de carros em JSON
        var json = JSON.stringify(carros);
        response.end(json);
    });

}

//funcao de callback para o servidor
function callback(request, response){
    
    //faz o parse da url separando o caminho (path)
    var parts = url.parse(request.url);
    var path = parts.path;

    //configura o tipo de retorno para aplication/json
    response.writeHead(200, {
        "Content-type": "application/json; charset=utf-8"
    });

    //verifica o path
    if(path == '/carros/classicos'){
        getCarros(response, "Classicos");
    }
    else if(path == '/carros/esportivos'){
        getCarros(response, "esportivos");
    }
    else if(path == '/carros/luxo'){
        getCarros(response, "luxo");
    }
    else{
        response.end('nenhum carro encontrado' + path);
    }
}

//servidor
const server = http.createServer(callback);

//porta que o servidor vai escutar
server.listen(3000);

//mensagem ao iniciar o servidor
console.log('servidor iniciado em http://localhost:3000/');