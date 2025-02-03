//funções
function calcularDano(ataque, defesa = 10){
    //função que calcula o dano
    let resultado;
    if (ataque-defesa >= 0){
        resultado = ataque - defesa
    } else {
        resultado = 0
    }
    return resultado
}

function checarInventario(item, inventario){
    //funcão que checa se um item esta ou não no inventario
    let encontrado = inventario.find((element) => element == item);
    if (encontrado){
        return true
    } else {
        return false
    }
}



//atributos e definições

let tempo = 5; //define o tempo do cronometro
let nomeJogador = "Malbenato";
let moeda = 5;
let vida = 3; //define as chances que o jogador tem
let nivel = 1;
let ataque = 20;
let defesa = 15;
let health_point = Number(prompt("Quanto de HP você tem?"));
let dificuldade;
let inimigosF1 = ["Goblin", "Orc", "Troll"]; //inimigos da fase 1
let inventario = ["Espada", "Poção", "Escudo"];
let buscar = String(prompt("Qual Item você busca?"));


//logs e exibições testes
console.log(nomeJogador);
console.log(`O herói tem ${moeda} moedas e ${vida} vidas.`);
console.log(typeof nivel);
console.log(ataque - defesa);

//checagem de vida do personagem
if (health_point > 0){
    console.log(`O personagem esta vivo com ${health_point} pontos de HP`)
} else {
    console.log('O personagem foi derrotado')
}

// definição de dificuldade
if (nivel >= 1 && nivel <= 10){
    dificuldade = 'Fácil';
} else if (nivel >= 11 && nivel <= 20) {
    dificuldade = 'Normal';
} else  if (nivel >= 21){
    dificuldade = 'Dificil';
} else {
    nivel = 11
    dificuldade = 'Normal'
};
console.log(`Sua dificuldade é ${dificuldade}`);

//cronometro
while (tempo > 0) {
    console.log(tempo);
    tempo--;
};
console.log("Batalha Iniciada!!")

//exibir inimigos
for (i = 0; i < inimigosF1.length; i++){
    console.log(inimigosF1[i])
}

console.log(calcularDano(ataque));

console.log(inventario[0],inventario[2]);
console.log(checarInventario(buscar,inventario));
inventario.splice(0,1);
inventario.splice(2,0, "Armadura");
console.log(inventario)