/*          MATRIZES ESPARSAS            */

/* Em algumas operações, slots vazios comportam-se como undefined: */ {
    const arr = [1, 2, , , 5]; 

    console.log(arr[2]); // undefined

    for (const i of arr) {console.log(i)} // 1, 2, undefined, undefined, 5

    const another = [...arr]; // [ 1, 2, undefined, undefined, 5 ]
}

/* Mas em outras (principalmente métodos de iteração), esses mesmos slots são ignorados: */ {
    const arr = [1, 2, , , 5];

    const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]

    arr.forEach((i) => console.log(i)); // 1 2 5

    const filtered = arr.filter(() => true); // [ 1, 2, 5 ]

    const keys = Object.keys(arr);
    for (const key in arr) {console.log(key)} // '0' '1' '4'

    const objectSpread = {...arr}; // { '0': 1, '1': 2, '4': 5 }
}