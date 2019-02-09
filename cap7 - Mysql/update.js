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

let sql = 'update carro set ? where id = ?';

//objeto carro em json
var json = {
    id: 31,
    nome: 'meu carro update',
    tipo:'esportivo'
};

let id = json.id;

connection.query(sql, [json, id], function(erro, results, fields){
    if(erro) throw erro;

    console.log("carro atualizado com sucesso");
    console.log("quantidade de registros autalizados: " + results.affectedRows);

});

connection.end();