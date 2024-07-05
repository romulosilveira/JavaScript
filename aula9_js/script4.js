const botao = document.querySelector("#botao")

botao.addEventListener("mouseover", ()=>{
    console.log("passou o mouse por cima")
})

botao.addEventListener("click", ()=>{
    console.log("clicou o mouse")
})

botao.addEventListener("dblclick", ()=>{
    console.log("clicou duas vezes")
})

botao.addEventListener("mouseout", ()=>{
    console.log("tirou o mouse de cima")
})

