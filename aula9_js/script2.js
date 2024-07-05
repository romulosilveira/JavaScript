const numeros = document.querySelectorAll(".numeros")
const botao = document.querySelector("#botao")
const resultado_maior = document.querySelector("#resultado_maior")
const resultado_menor = document.querySelector("#resultado_menor")

botao.addEventListener("click", ()=>{
    let maior = Number(numeros[0].value)
    let menor = Number(numeros[0].value)
    for(numero_da_vez of numeros){
        const numero = Number(numero_da_vez.value)
        if(numero > maior){
            maior = numero
        }
        if(numero < menor){
            menor = numero
        }
    }
    resultado_maior.textContent = `O maior foi o ${maior}`
    resultado_menor.textContent = `O menor foi o ${menor}`
})