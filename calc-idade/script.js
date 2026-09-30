//pegar elementos no html

const formulario = document.getElementById("formulario")

const nome = document.getElementById("nome")
const nascimento = document.getElementById("nascimento")

const nomeResultado = document.getElementById("nomeResultado");
const dataResultado = document.getElementById("dataResultado");
const idadeResultado = document.getElementById("idadeResultado");
const boxResultado = document.getElementById("resultado")

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
    
    const anonascimento = Number(dataseparada[0]);
    const mesnascimento = Number(dataseparada[1]);
    const dianascimento = Number(dataseparada[2]);
    

    

    const hoje = new Date();
    
    const anoatual = hoje.getFullYear();//pega somente o ano
    const mesatual = hoje.getMonth();//pega somente o mês
    const diaatual = hoje.getDate();//pega somente o dia
    
    
// console.log(hoje);
// console.log(anoatual);
// console.log(mesatual);
// console.log(diaatual);

let idade = anoatual - anonascimento;



if (mesnascimento > mesatual) {
    idade = idade - 1;
}



if (mesnascimento == mesatual) {
    if (dianascimento > diaatual) {
        idade = idade -1;
    }
}

    console.log(idade);
        


})
    
const dataformatada = dianascimento  + "/" + mesnascimento + "/" + anonascimento;


nomeResultado.textContent = valornome;
dataResultado.textContent = dataformatada;
idadeResultado.textContent = idade;

boxResultado.style.display = "block";
























