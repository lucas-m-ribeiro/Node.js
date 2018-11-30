/*
obter o ususario
1 obter numero de telefone a partir do id
obter o endereço do usuario pelo id

simulando uma requisição ao banco de dados e sincronizando funções com promisses
*/

//quand der problema chama o reject e passa o erro (ERROR)
//quando for sucesso chama o resolve
function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idusuario) {
    return new Promise(function resolvePromise(resolve, reject){

        setTimeout(function(){
            return resolve({
                telefone: '39529884',
                ddd: '(12)'
            })
        }, 2000);
    })
}

//nao esta retornando usuario nao sei porque :(

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return ({
                rua: 'kkk',
                numero: 0
            })
        }, 2000);
    })
}

//para manipular o sucesso usamos a função .then 
//para manipular erros usamos a função .catch

//retorna usuario
const usuarioPromise = obterUsuario();

usuarioPromise.then(function(resultado){
    console.log('resultado', resultado);
})
.catch(function(erro){
    console.error("deu ruim saporra", erro);
});

//retorna telefone
const telefonePromise = obterTelefone();

telefonePromise.then(function(resultado){
    console.log('resultado', resultado);
})
.catch(function(erro){
    console.error("deu ruim saporra no telefone", erro);
});

// retorna endereco
const EnderecoPromise = obterEndereco();

EnderecoPromise.then(function(resultado){
    console.log('resultado', resultado);
})
.catch(function(erro){
    console.error("deu ruim saporra no endereco", erro);
});