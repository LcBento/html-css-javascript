var corpo = window.document.body /*-------------------------------------------------para selecionar o body*/
        corpo.style.background = 'rgb(233, 216, 186)' /*----------------------------para mudar a cor do corpo*/
        
var p0 = window.document.getElementsByTagName('p')[0] /*--------------------para seleconar o paragrafo 1*/
        p0.style.color = 'brown' /*-------------------------------------------------para mudar a cor do paragrafo 1*/
        window.document.write('Está escrito assim: ' + p0.innerText) /*-------------para selecionar somente o texto*/

var p1 = window.document.getElementsByTagName('p')[1] /*--------------------para seleconar o paragrafo 2*/
        p1.style.color = 'brown' /*-------------------------------------------------para mudar a cor do paragrafo 2*/
        window.document.write(p1.innerHTML) /*-------------para selecionar o texto formatado*/

var d = window.document.getElementById('msg') /*----------------------------para selecionar a div*/
        d.style.background = 'green' /*---------------------------------------------para mudar o background da div*/
        d.innerText = 'Estou aguardando...' /*--------------------------------------para mudar o texto da div*/
        window.document.getElementyId('msg').innerText = 'Estou aguardando...' /*---para mudar o texto da div*/

/*var d = window.document.querySelector('div#msg')
d.style.color = 'black'
d.style.background = 'white'*/

//toda id é representada por #     <div id= "msg">
//toda class é representada por .  <div class= "msg">