let num = [3, 4, 1, 2]

num[4] = 5   //adiciona o número na posição 4
num.push(6)  //adiciona o número na última posição
num.length   //para mostrar quantos elemento
num.sort()   //coloca os números em ordem crescente

//num é uma variável composta/array/vetor, que é composto de elementos, 
//o elemento de um vetor é um par que agrupa o espaço da memória, o valor colocado dentro dele e o índice.
//índice/chave/key, é a posição de cada conteúdo.

console.log(`os vetores são ` + num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor na posição 0 é ` + num[0])

console.log(`Agora vamos buscar um valor`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 2 está na posição ${pos}`)
}
