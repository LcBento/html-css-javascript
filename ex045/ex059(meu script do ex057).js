function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/1.baby.boy.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/3.boy.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/5.men.jpg')
            } else {
                img.setAttribute('src', 'imagens/7.old.men.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/2.baby.girl.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/4.girl.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/6.women.jpg')
            } else {
                img.setAttribute('src', 'imagens/8.oldwomen.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}