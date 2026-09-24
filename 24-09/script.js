// exercicio 7

//             0                1           2       3        4
// let nome =["morangow", "laranja (a cor)", "uva", "maça", "abacaxi"]
//  console.log(nome);
// console.log(nome[0]);
// console.log(nome[2]);


// console.log(nome.length);

// // exercicio 8

let citys =["são paulo", "são caetano", "RJ", "pintópolis", "ser gipe"]

console.log(citys);

citys[1] = "não-me-toque"
console.log(citys[1]);   

console.log(citys.length);

// exercicio 9

// let nomes =["IVEL", "billie", "jackson", "prince", "myers", "jumper"]

// for (let  index = 0; index  <=nomes.length; index++) {
    // console.log(nomes [index]);
// }

//exercicio 10

// let precos =["0,99", "0,67", "5,97", "578,88", "21,99", "89,99"]

// for (let  index = 0; index  <=precos.length; index++) {
//     console.log(precos [index]);
// }

//exercicio 11


// let produtos =["batata", "pipino", "itambé", "placa de video", "doritos", "thriller"]
// let precos =["0,99", "0,67", "5,97", "578,88", "21,99", "89,99"]

// for (let  index = 0; index  < precos.length; index++) {
//     console.log(precos [index], produtos[index]);
// }

// --------------- Estrutura de repetição + Estrutura de decisão -----------
// for (let index = 0; index <= 10; index++) {//contando de 0 a 10

//     if(index >= 5) {// verificando se é maior ou igual a 5
//         console.log(index);//mostra o numero
//     }
// }

let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
for (let index = 0; index < numeros.length; index++) {
    let sobra = numeros[index] % 2;


    if(sobra == 0) {
        console.log("o number " + numeros[index] +" é par");
    } else {
        console.log("o number " + numeros[index] +" é impar");
    }
}

let notas = [7, 8, 9, 10, 2, 5, 4, 1];

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];

    if (element >= 7) {
        console.log("passou")
    
    } else {
        console.log("repetiu")
    }
    
}

let temp = [32, 40, 7, 0, 90, 15, 12]

for (let index =)



