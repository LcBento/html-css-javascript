var saldo = 1545.5
console.log(`Seu saldo é de ${saldo}`)
console.log(saldo.toFixed(2))
console.log(saldo.toFixed(2).replace('.', ','))
console.log(saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
console.log(saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))
console.log(saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}))
//saldo.toFixed(2)                      vira 1545.50
//saldo.toFixed(2).replace('.', ','))   vira 1545,50