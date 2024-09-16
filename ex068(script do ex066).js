function contar() {
    var ini = docuemnt.getElementById('txti')
    var fim = docuemnt.getElementById('txtf')
    var passo = docuemnt.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    } else {
        alert('TUDO OK!')
    }
}