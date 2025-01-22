const blocoPresente = document.querySelector(".bloco-presente")
const presente = document.querySelector(".presente")
const presenteAberto = document.querySelector(".presente-aberto")
const carta = document.getElementById("carta")


blocoPresente.addEventListener('click', () =>{
    presente.style.display = "none"
    presenteAberto.style.display = "block"
    carta.style.display = "block"
})