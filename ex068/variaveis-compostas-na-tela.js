let valores = [ 5, 3, 1, 6, 2, 4]

//console.log(valores)
/*
console.log(valores[0]
console.log(valores[1]
console.log(valores[2]
console.log(valores[3]
console.log(valores[4]
console.log(valores[5]
*/
//o for tem três elementos:
//iniciaização; teste lógico; encremento
for(let pos=0; pos < valores.length; pos++) {                    //enquanto pos for menor do que o tamanho do vetor, pos vai receber +1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`Agora uma forma mais simplificada`)

for(let pos in valores) {                                        //para cada posição na variável composta, eu vou mostrar o num.pos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}