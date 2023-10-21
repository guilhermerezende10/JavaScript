let num = [1,2,4,6,7,9]


/*

VERSAO PRO

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)}

--------------------------------------------------------------

VERSAO NIVEL GOD KKKK

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)}

*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)}

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
}
else {console.log(`O valor 9 está na posição ${pos}`)}
