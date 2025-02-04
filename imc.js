const calcular = document.getElementById("calcular");

function imc(){
    const nome = document.getElementById("nome").value
    const altura = +document.getElementById("altura").value
    const peso = +document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1)
        resultado.textContent = valorIMC

        let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = 'Você está baixo do peso ideal.'
        } else if(valorIMC < 25){
            classificacao = 'Você está com o peso ideal, Parabéns!'
        } else if(valorIMC < 30){
            classificacao = 'Você esta um pouco acima do peso.'
        } else if(valorIMC < 35){
            classificacao = 'Você está com obesidade grau I.'
        } else if(valorIMC < 40){
            classificacao = 'Você está com obesidade grau II.'
        } else{
            classificacao = 'Você está com obesidade grau III. Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e ${classificacao}`
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc)