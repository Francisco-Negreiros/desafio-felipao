// DESAFIO CLASSIFICADOR DE NIVEL DE HEROI
let name = "Superman";
let xp = 9500; 

let level = "";

let range = 0;

if (xp < 1000) {
  range = 0;
} else if (xp <= 2000) {
  range = 1;
} else if (xp <= 5000) {
  range = 2;
} else if (xp <= 7000) {
  range = 3;
} else if (xp <= 8000) {
  range = 4;
} else if (xp <= 9000) {
  range = 5;
} else if (xp <= 10000) {
  range = 6;
} else {
  range = 7;
}

switch (range) {
  case 0:
    level = "Ferro";
    break;
  case 1:
    level = "Bronze";
    break;
  case 2:
    level = "Prata";
    break;
  case 3:
    level = "Ouro";
    break;
  case 4:
    level = "Platina";
    break;
  case 5:
    level = "Ascendente";
    break;
  case 6:
    level = "Imortal";
    break;
  case 7:
    level = "Radiante";
    break;
  default:
    level = "";
}
console.log(`O Herói de nome **${name}** está no nível de **${level}**`);