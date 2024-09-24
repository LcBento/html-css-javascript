function calcular() {
    var txtn = window.document.querySelector('input#txtnac')
    var res = window.document.querySelector('div#res')
    var porg = (txtn.value)

    res.innerHTML = `Seu país de nascimento é ${porg}`

    if (porg == 'Brasil') {
        res.innerHTML = `<p>Você nasceu no Brasil, então você é brasileiro!</p>`
    } else {
        res.innerHTML = `<p>Você nasceu no ${porg}, então você é estrangeiro!</p>`
    }
}