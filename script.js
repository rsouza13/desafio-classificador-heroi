let nome = 'Homem de Ferro'
let XP = 1000
nivel = ''

if(XP <= 1000){
    nivel = 'Ferro';
}else if(XP <= 2000){
    nivel = 'Bronze';
}else if(XP <= 5000){
    nivel = 'Prata';
}else if(XP <= 7000){
    nivel = 'Ouro';
}else if(XP <= 8000){
    nivel = 'Platina Diamante';
}else if(XP <= 9000){
    nivel = 'Ascendente';
}else if(XP <= 10000){
    nivel = 'Imortal';
}else {
    nivel = 'Radiante';
}

let result = "O Herói de nome **{"+nome+"}** está no nível **{"+nivel+"}**";

console.log(result);