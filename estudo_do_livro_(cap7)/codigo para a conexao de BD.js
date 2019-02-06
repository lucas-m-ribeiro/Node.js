//carregando os modulos
var mysql = require('mysql');

//cria conexao com mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user:'livro',
    password:'livro123',
    database:'livro'

});

//conecta com o banco de dados 
connection.connect();

let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
connection.query(sql, function(error, results, fields){
    //a funcao de callback possui 3 parametros
    //error: erro na consulta sql seja invalida, por exemplo um erro de sintaxe
    //results: contem os registros retornados pela consulta, neste caso sera a lista de carros
    //fields contem informações sobre colunas retornadas, neste exemplo as colunas id, nome e tipo.
});

//fecha a conexao com o banco de dados
connection.end();