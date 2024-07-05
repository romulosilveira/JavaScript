const n1 = document.querySelector("#numero1")
const n2 = document.querySelector("#numero2")
const n3 = document.querySelector("#numero3")
const n4 = document.querySelector("#numero4")
const botao = document.querySelector("#botao")
const resultado_maior = document.querySelector("#resultado_maior")

botao.addEventListener("click", ()=>{
   const num1 = Number(n1.value)
   const num2 = Number(n2.value)
   const num3 = Number(n3.value)
   const num4 = Number(n4.value)
   
   if(num1>num2 && num1>num3 && num1>num4){
    resultado_maior.textContent = `O maior número é o ${num1}.`
   }
   else if(num2>num1 && num2>num3 && num2>num4){
    resultado_maior.textContent = `O maior número é o ${num2}.`
   }
   else if(num3>num2 && num3>num1 && num3>num4){
    resultado_maior.textContent = `O maior número é o ${num3}.`
   }
   else if(num4>num2 && num4>num3 && num4>num1){
    resultado_maior.textContent = `O maior número é o ${num4}.`
   }
   else {
    resultado_maior.textContent = `Os números são iguais.`
   }
})