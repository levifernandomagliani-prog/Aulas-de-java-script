const formulario = document.getElementById("formulario")

const nome = document.getElementById("nome")
const nascimento = document.getElementById("peso")

const nomeResultado = document.getElementById("nomeResultado");
const pesoResultado = document.getElementById("pesoResultado");
const alturaResultado = document.getElementById("alturaResultado");
const boxResultado = document.getElementById("resultado")
const imcresultado = document.getElementById("imcResultado")
const classResultado = document.getElementById("classificacao")

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    const valornome = nome.value;
    const valorpeso = peso.value;
    const valoraltura = altura.value;

    let classificação;
    let imc =  valorpeso / (valoraltura * valoraltura)
    console.log(imc);
    
    if (imc < 18.5) {
        classificação = "Abaixo do peso"
    } else if (imc > 18.5 && imc < 25) {
        classificação = "normante"
    } else if (imc >= 25 && imc < 30) {
        classificação = "gordin"
    } else if (imc >= 30 && imc < 35) {
        classificação = "gordo"
    } else if (imc > 30 && imc < 40) {
        classificação = "gordao"
    } else {
        classificação = "larga a coxinha"
    }

nomeResultado.textContent = valornome;
pesoResultado.textContent = valorpeso;
alturaResultado.textContent = valoraltura;
imcresultado.textContent = imc.toFixed(5);
classResultado.textContent = classificação;

boxResultado.style.display = "block";




})





















