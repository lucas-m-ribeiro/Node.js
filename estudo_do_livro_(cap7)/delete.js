// Carrega o módulo do MySQL
const mysql = require('mysql');

// Cria a conexão com MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'livro',
	password: 'livro123',
	database: 'livro'
});

// Conecta no banco de dados	
connection.connect();

let sql = 'delete from carro where id = ?';

let id = 31;

connection.query(sql, id, function(erro, results, fields){
    if(erro) throw erro;

    console.log("carro deletado com sucesso");
    console.log("quantidade de registros deletados: " + results.affectedRows);
});

connection.end();