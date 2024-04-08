/*              CRIANDO UM ARRAY                */


/* INSTRUÇÕES EQUIVALENTES: */ { 
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
}


/* CRIANDO UM ARRAY COM COMPRIMENTO DIFERENTE DE 0: */ {
let arrayLength = 3

const arr1 = new Array(arrayLength);

const arr2 = Array(arrayLength);

const arr3 = [];
arr3.length = arrayLength;
}


/* ATRIBUINDO UM ARRAY A UM OBJETO: */ {
const obj1 = {};
obj1.prop = [element0, element1, /* …, */ elementN];

const obj2 = { prop: [element0, element1, /* …, */ elementN] };
}


/* CRIANDO UM ARRAY COM UM ÚNICO ELEMENTO: */ {
const arr1 = [42];
const arr2 = Array.of(42)

//Obs: isso cria um array com 42 elementos:
const arr = Array(42);
}
