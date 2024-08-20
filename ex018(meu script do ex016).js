function carregar() {
    var mensage = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()

    if (hora >= 0 && hora < 12) {
        mensage.innerHTML = `Agora são ${hora}h e ${minute}m Bom Dia!.`
        img.src = 'imagens/1.foto.manha.png'
        document.body.style.background = 'rgb(233, 216, 186)'
    } else if (hora >= 12 && hora <= 18) {
        mensage.innerHTML = `Agora são ${hora}h e ${minute}m Boa Tarde!.`
        img.src = 'imagens/2.foto.tarde.png'
        document.body.style.background = 'rgb(139, 143, 116)'
    } else {
        mensage.innerHTML = `Agora são ${hora}h e ${minute}m Boa Noite!.`
        img.src = 'imagens/3.foto.noite.png'
        document.body.style.background = 'rgb(93, 87, 75)'
    }
}