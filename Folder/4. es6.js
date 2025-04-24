//Criando um vetor de objetos
const usuarios = [
    {nome: 'Marta', idade: 25},
    {nome: 'José', idade: 50},
    {nome: 'Marília', idade: 17},
    {nome: 'Carla', idade: 10},
]

//Funções Lambda
//Percorrendo o vetor
usuarios.forEach((usuario) => 
    console.log(`Nome: ${usuario.nome} tem ${usuario.idade}.`))

//Filtrando por idade menor que 18 anos.
console.log('\nFiltrando por idade menor que 18.')
const menorIdade = usuarios.filter((usuario) => usuario.idade < 18)
menorIdade.forEach((usuario) => 
    console.log(`Nome: ${usuario.nome} tem ${usuario.idade}.`))

console.log('\nRetornando apenas nomes da lista.')
const listaNomes = usuarios.map(usuario => usuario.nome)
listaNomes.forEach((nome, index) => 
    console.log(`${++index}º nome: ${nome}`))

console.log('\nEncontrar um usuário na lista.')
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Marta')
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

console.log('\nSomando todas as idades na lista.')
const somaidades = usuarios.reduce((soma, usuario) => soma + usuario.idade, 0)
console.log(`Soma: ${somaidades}`)
