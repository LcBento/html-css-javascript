var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Então você não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('Então seu voto é opcional')
} else {
    console.log('Então seu voto é obrigatório')
}