var a = window.document.getElementById('area')

/* a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mousemove', mover)
a.addEventListener('mousedown', clicar e segurar)
a.addEventListener('mouseup', clicar e soltar)
a.addEventListener('mouseout', sair)*/

//esses comandos podem substituir a linha 20, nesta mesma posição

        function clicar() {
            a.innerText = 'clicou'
            a.style.background = 'red'
        }
        function entrar() {
            a.innerText = 'entrou'
            a.style.background = 'yellow'
        }
        function sair() {
            a.innerText = 'saiu'
            a.style.background = 'greenyellow'
        }