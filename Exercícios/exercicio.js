/* Eercício I

var deuses = ['Aegir', 'Aud', 'Balder'];
var info = 'Os deuses são: ';

function imprimir(){

var res = document.querySelector('div#res');

for (var i = 0; i < deuses.length; i++) {
  info += deuses[i] + ', ';
}

res.innerHTML = info;
}

function novo(){

    var prox_posicao = deuses.push('Loki', 'Odin', 'Frey');
    resposta.innerHTML= (`${deuses[3]} ${deuses[4]} ${deuses[5]} foram adicionados.`);

}*/
/* Exercício 3
var numeros = [5, 7, 1, 8, 9];
var info = 'Os números são: ';

function imprimir(){

var res = document.querySelector('div#res');

for (var i = 0; i < numeros.length; i++) {
  info += numeros[i] + ', ';
}

res.innerHTML = [5, 7, 1, 8, 9].sort();
}
*/