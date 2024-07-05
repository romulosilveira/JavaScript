const fruta = document.querySelector("#fruta")
const botao = document.querySelector("#botao")
const lista_resultados = document.querySelector("#lista_resultados")

botao.addEventListener("click", ()=>{
    if(fruta.value === ""){
        alert("Preencha o campo")
    }else{
        const novo_elemento = document.createElement("li")
        novo_elemento.textContent = fruta.value
        novo_elemento.style.color = "red"
        lista_resultados.appendChild(novo_elemento)

        fruta.value = ""
        fruta.focus()
    }
})