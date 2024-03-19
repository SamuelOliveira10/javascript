/*              MÉTODOS DO ARRAY                */

/* 01. concat() une dois ou mais arrays: */ {
    let myArray = ["1", "2", "3"];
    myArray = myArray.concat("a", "b", "c"); // ["1", "2", "3", "a", "b", "c"]
}

/* 02. join() une todos os elementos de um array em uma string: */ {
    const myArray = ["Wind", "Rain", "Fire"];
    const list = myArray.join(" - "); // "Wind - Rain - Fire"
}

/* 03. push() adiciona um ou mais elementos no final e retorna o length: */ {
    const myArray = ["1", "2"];
    const larg = myArray.push("3");
    console.log(myArray) // ["1", "2", "3"]
    console.log(larg) // 3
}

/* 04. pop() remove o último elemento e retorna o mesmo: */ {
    const myArray = ["1", "2", "3"];
    const last = myArray.pop();
    console.log(myArray) // ['1', '2']
    console.log(last) // 3
}

/* 05. shift() remove o primeiro elemento e retorna o mesmo: */ {
    const myArray = ["1", "2", "3"]
    const first = myArray.shift()
    console.log(myArray) // ['2','3']
    console.log(first) // 1
}

/* 06. unshift() adiciona um ou mais elementos no início e retorna o length: */ {
    const myArray = ["3", "4", "5"];
    const larg = myArray.unshift("1", "2");
    console.log(myArray) // [ '1', '2', '3', '4', '5' ]
    console.log(larg) // 5
}

/* 07. slice() extrai uma seção do array: */ {
    let myArray = ["a", "b", "c", "d", "e"];
    myArray = myArray.slice(1, 4); // [ "b", "c", "d"]

    /* Obs: o último número não é contado. */ 
}

/* 08. at() retorna o elemento no índice especificado, pode receber valores negativos ou positivos: */ {
    const myArray = ["a", "b", "c", "d", "e"];
    const pos = myArray.at(2) // "c"
    const neg = myArray.at(-2) // "d"
}

/* 09. splice() remove um intervalo elementos de um array e (opcionalmente) os substitui, retornando os itens removidos: */ {
    const myArray = ["1", "2", "3", "4", "5"];
    const myRet = myArray.splice(1, 3, "a", "b", "c", "d");
    console.log(myArray) // [ '1', 'a', 'b', 'c', 'd', '5' ]
    console.log(myRet) // [ '2', '3', '4' ]
}

/* 10. reverse() inverte a posição dos elementos no array: */ {
    const myArray = ["1", "2", "3", "4", "5"];
    myArray.reverse(); // [ '5', '4', '3', '2', '1' ]
}

/* 11. flat() retorna o array sem os subarrays conservando sua posição: */ {
    let myArray = [1, 2, [3, 4], 5];
    myArray = myArray.flat(); // [ 1, 2, 3, 4, 5 ]
}

/* 12. sort() reorganiza os arrays em ordem: */ {
    const arr1 = ["Wind", "Rain", "Fire"];
    arr1.sort() // [ 'Fire', 'Rain', 'Wind' ]

    const arr2 = [3, 1, 2]
    arr2.sort() // [ 1, 2, 3 ]

    const arr3 = ["Wind", 3, "Rain", 1, "Fire", 2]
    arr3.sort() // [ 1, 2, 3, 'Fire', 'Rain', 'Wind' ]

    /* sort() também pode usar uma função para determinar como os elementos são comparados: */ {
        const myArray = ["Wind", "Rain", "Fire"];
        const sortFn = (a, b) => {
            if (a[a.length - 1] < b[b.length - 1]) {
              return -1;
            } else if (a[a.length - 1] > b[b.length - 1]) {
              return 1;
            }
            return 0;
          };
        myArray.sort(sortFn);
        //Classifica os elementos pela última letra
    }
}

/* 13. indexOf() procura um elemento no array e retorna a primeira ocorrencia: */ {
    const a = ["a", "b", "a", "b", "a"];
    console.log(a.indexOf("b")); // 1
    console.log(a.indexOf("b", 2)); // 3
    console.log(a.indexOf("z")); // -1
}