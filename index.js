let nomeHeroi = "Conan";
let XP = 3000;
console.log("Olá " + nomeHeroi + " . Vamos ver seu nível de experiência");
if (XP <= 1000){
    console.log ("Você é um herói nível FERRO"); 
}else if (XP >=1001 && XP <=2000) {
    console.log ("Você é um herói nível BRONZE"); 
} else if (XP >=2001 && XP <=5000) {
    console.log ("Você é um herói nível PRATA");
} else if (XP >=6001 && XP <=7000) {
    console.log ("Você é um herói nível OURO"); 
} else if (XP >=7001 && XP <=8000) {
    console.log ("Você é um herói nível PLATINA"); 
} else if (XP >=8001 && XP <=9000) {
    console.log ("Você é um herói nível ASCENDENTE");  
}else if (XP >=9001 && XP <=10000) {
    console.log ("Você é um herói nível IMORTAL"); 
} else if (XP >=10001){
    console.log ("Você é um herói nível RADIANTE");
}
