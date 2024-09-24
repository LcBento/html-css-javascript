var n1 = Number.parseInt(window.prompt ('Digite um número: '))
        var n2 = Number.parseInt(window.prompt ('Digite outro número: '))
        var som = n1 + n2 //soma
        var sub = n1 - n2 //subtração
        var mul = n1 * n2 //multiplicação
        var dvr = n1 / n2 //divisão real
        var dvi = n1 % n2 //divisão inteira
        var pt = n1 ** n2 //potência
        
        window.alert(`A soma dos valores ${n1} + ${n2} é de ${som}`)
        window.alert(`A subtração dos valores ${n1} - ${n2} é de ${sub}`)
        window.alert(`A multiplicação dos valores ${n1} x ${n2} é de ${mul}`)
        window.alert(`A divisão real dos valores ${n1} ÷ ${n2} é de ${dvr}`)
        window.alert(`A divisão inteira dos valores ${n1} ÷ ${n2} é de ${dvi}`)
        window.alert(`A potência dos valores ${n1} ^ ${n2} é de ${pt}`)

        /*  ordem de precedencia
            ()
            ** 
            * / % 
            + -
            
            operadore relacionais
            >     
            <     
            >=    
            <=    
            ==    
            !=    


            */