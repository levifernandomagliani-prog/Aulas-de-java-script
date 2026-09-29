//pegar elementos no html

const formulario = document.getElementById("formulario")

const nome = document.getElementById("nome")
const nascimento = document.getElementById("nascimento")

formulario.addEventListener("submit", function(event){
    event.preventDefault();//impede que a tela recarregue

    //pegar o valor dos imputs
    const valornome = nome.value;
    const valornascimento = nascimento.value;

    console.log(valornome);
    console.log(valornascimento);

    //separa a data em 3 valores
    const dataseparada = valornascimento.split("-");

    console.log(dataseparada);
})
