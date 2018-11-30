/*
obter o ususario
1 obter numero de telefone a partir do id
obter o endereço do usuario pelo id

simulando uma requisição ao banco de dados e sincronizando funções com callback
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

//por padrao callback sempre vem depois do parametro passado na função
//callback sempre é declarado na função, primeiro parametro (null) é o erro e o segundo é o sucesso que nesse caso o
//retorno da função 

function obterTelefone(idusuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '39529884',
            ddd: '(12)'
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'kkk',
            numero: 0
        })

    }, 2000);
}

// function resolverUsuario(erro, usuario){
//     console.log('usuario', usuario);
// } 

//logo apos de executar a função obter usuario ele ira chamar a função resolver usuario para devolver o valor esperado na função
obterUsuario(function resolverUsuario(erro, usuario) {
    if (erro) {
        console.log("deu ruim saoprra", erro);
        return;
    }

    //para sincronizar a função com um parametro antes do callback ele deve ser declarado antes e depois chamar a função do sucesso
    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
        if (erro) {
            console.log("deu ruim saoprra no telefone", erro1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(erro2, endereço) {
            if (erro) {
                console.log("deu ruim saoprra no endereco", erro2);
                return;
            }
        
        console.log(`
        Nome: ${usuario.nome},
        endereco: ${endereço.rua}, ${endereço.numero},
        telefone: ${telefone.ddd},${telefone.telefone};
        `);
        })
    })
});