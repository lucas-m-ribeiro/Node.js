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

let sql = 'insert into carro set ?';

//objeto carro em json
var carro = {
    nome: 'meu carro',
    tipo:'esportivo'
};

connection.query(sql, carro, function(erro, results, fields){
    if(erro) throw erro;

    console.log("carro salvo com sucesso, id = " + results.insertId);
});

connection.end();