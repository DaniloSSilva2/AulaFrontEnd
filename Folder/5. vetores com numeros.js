const listaDeNumeros = [2, 4, 6, 8]
console.log('Listando todos os valores da lista.')
console.log(listaDeNumeros)

console.log('\nMultiplicando valores por 2')
const dobrados = listaDeNumeros.map(n => n * 2)
console.log(dobrados)

console.log('Filtrando elementos pares.')
const pares = listaDeNumeros.filter(n => n%2 == 0)
console.log(pares)

console.log('\nSomando os números da lista.')
const soma = listaDeNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)




