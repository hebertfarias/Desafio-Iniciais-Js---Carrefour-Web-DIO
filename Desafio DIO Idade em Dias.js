//Idade em Dias

let totalDeDias = parseInt(gets());
let meses = parseInt((totalDeDias%365) / 30);
let anos = parseInt(totalDeDias / 365);
let dias = parseInt((totalDeDias%365)%30);

print(anos + " ano(s)");
print(meses + " mes(es)");
print(dias + " dia(s)");