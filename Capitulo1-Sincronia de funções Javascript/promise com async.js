/*
obter o ususario
1 obter numero de telefone a partir do id
obter o endereço do usuario pelo id

simulando uma requisição ao banco de dados e sincronizando funções com promisses (async e await);
*/

// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

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
                ddd: 12
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}
// 1o passso adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}


//para manipular o sucesso usamos a função .then 
//para manipular erros usamos a função .catch

//retorna usuario
// const usuarioPromise = obterUsuario();

// usuarioPromise.then(function(resultado){
//     console.log('resultado', resultado);
// })
// .catch(function(erro){
//     console.error("deu ruim saporra", erro);
// });

// //retorna telefone
// const telefonePromise = obterTelefone();

// telefonePromise.then(function(resultado){
//     console.log('resultado', resultado);
// })
// .catch(function(erro){
//     console.error("deu ruim saporra no telefone", erro);
// });

// // retorna endereco
// const EnderecoPromise = obterEndereco();

// EnderecoPromise.then(function(resultado){
//     console.log('resultado', resultado);
// })
// .catch(function(erro){
//     console.error("deu ruim saporra no endereco", erro);
// });