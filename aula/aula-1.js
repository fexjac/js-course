//única linha
/* múltiplas linhas
comentário
de 
multiplas
linhas */
console.log('Olá mundo!');

var oi = "oi";
oi = 1;
console.log(oi);
//tipagem dinâmica
//fracamente tipada
var x = 1 + 2;
var x = 2 + 3; //redeclarada
x = -1; //valor redefinido

//var hoisting
console.log(nome);
var nome = "Juliano";

/*var ola = "diga olá";
if (true){
    var ola = "diga oi"
    let z = "X"
}*/
//console.log(ola);
//console.log(z);

let ola = "diga olá";
if (true){
    let ola = "diga oi";
}
console.log(ola);
ola = "novo valor";

//Números 1 3.14
//String "uma string" -> 'outra string'
//lógico: true ou false
//Null -> representa a ausência intencional de valor
//Undefined
//Symbol -> ID
//Object

//Operadores aritméticos
console.log(1+3);
console.log(3-1);
console.log(3*1);
console.log(3/1);
console.log(5%3);

console.log('Olá, ' + 'mundo!')
let str = 'Olá ' + 'mundo!'
console.log(str);

str = 'Apple, Banana, Kiwi';
let new_str = str.slice(7, 13);
console.log(new_str);

str = "101 dálmatas são dálmatas 101";
console.log("O caractere na posição 16 é " + str.charAt(16));
console.log(str.endsWith('de solidão'));

console.log(str.startsWith('101'));

console.log(str.indexOf('dálmatas', 5));

console.log(str.lastIndexOf('dálmatas'));

console.log('oi'.repeat(2.9))

//console.log(str.replaceAll('101', '201'));

console.log('juliano'.toUpperCase());
console.log('         juliano          '.trim());
console.log('         juliano          '.trimEnd());
console.log('         juliano          '.trimStart());

console.log(str.replace('101', '201'));
while(str != str.replace('101', '201')){
    str = str.replace('101', '201');
}
console.log(str);

function replaceAll(s){
    while(s != s.replace('101', '201')){
        s = s.replace('101', '201');
    }
    return s;
}

str2 = "101 dálmatas são dálmatas 101";
str2 = replaceAll(str2);
console.log(str2);