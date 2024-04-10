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

/* 14. lastIndexOf() funciona como indexOf, mas pesquisa do fim para o começo: */ {
    const a = ["a", "b", "c", "d", "a", "b"];
    console.log(a.lastIndexOf("b")); // 5
    console.log(a.lastIndexOf("b", 4)); // 1
    console.log(a.lastIndexOf("z")); // -1
}

/* 15. forEach() é usado como forma de iteração: */ {
    const a = ["a", "b", "c"]
    a.forEach((element) => console.log(element))
    // a
    // b
    // c
}

/* 16. map() retorna um novo array com o valor da execução callback em cada item: */ {
    const a1 = ["A", "b", "c"];
    const a2 = a1.map((item) => item.toLowerCase());
    console.log(a2); // ['A', 'B', 'C']

    const n1 = [1, 4, 9];
    const n2 = n1.map((item) => Math.sqrt(item));
    console.log(n2); // ['1', '2', '3']
}

/* 17. flatMap() é executado map()seguido por um flat()de profundidade 1: */ {
    const a1 = ["a", "b", "c"];
    const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
    console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']

    const n1 = ["1", "4", "9"];
    const n2 = n1.flatMap((item) => [ item - 2 * item, Math.sqrt(item)]);
    console.log(n2); // [ -1, 1, -4, 2, -9, 3 ]
}

/* 18. filter() retorna um novo array contendo os itens para os quais callbackfoi retornado true: */ {
    const a1 = ["a", 10, "b", 20, "c", 30];
    const a2 = a1.filter((item) => typeof item === "number");
    console.log(a2); // [10, 20, 30]

    const b1 = [ -5, 10, -15, 20, -25, 30];
    const b2 = b1.filter((item) => item < 0);
    console.log(b2); // [-5, -15, -25]
}

/* 19. find() retorna o primeiro item para o qual callbackfoi retornado true: */ {
    const a1 = ["a", 10, "b", 20, "c", 30];
    const i = a1.find((item) => typeof item === "number");
    console.log(i); // 10
}

/* 20. findLast() retorna o último item para o qual callbackfoi retornado true: */ {
    const a1 = ["a", 10, "b", 20, "c", 30];
    const i = a1.findLast((item) => typeof item === "number");
    console.log(i); // 30
}

/* 21. findIndex() retorna o índice do primeiro item para o qual callbackfoi retornado true: */ {
    const a1 = ["a", 10, "b", 20, "c", 30];
    const i = a1.findIndex((item) => typeof item === "number");
    console.log(i); // 1
}

/* 22. findIndexLast() retorna o índice do último item para o qual callbackfoi retornado true: */ {
    const a1 = ["a", 10, "b", 20, "c", 30];
    const i = a1.findLastIndex((item) => typeof item === "number");
    console.log(i); // 5
}

/* 23. every() retorna trueif callbackretorna truepara cada item do array: */ {
    function isNumber(value) {
        return typeof value === "number"
    }
    
    const a1 = [1, 2, 3];
    console.log(a1.every(isNumber)); // true

    const a2 = [1, "b", 3];
    console.log(a2.every(isNumber)); // false
}

/* 24. some() retorna truese callbackretornar truepelo menos um item da matriz: */ {
    function isNumber(value) {
        return typeof value === "number";
    }

    const a1 = [1, 2, 3];
    console.log(a1.some(isNumber)); // true

    const a2 = [1, "b", 3];
    console.log(a2.some(isNumber)); // true

    const a3 = ["a", "b", "c"];
    console.log(a3.some(isNumber)); // false
}

/* 25. reduce() reduz a lista de itens a um único valor retornando o valor final da função callback*/ {
    const a = [10, 20, 30, 19, 21];
    const total = a.reduce((a, b) => a - b);
    console.log(total); // -80
}

/* 26. reduceRight() funciona como reduce(), mas começa com o último elemento. */ {
    const a = [10, 20, 30, 19, 21];
    const total = a.reduceRight((a, b) => a - b);
    console.log(total); // -58
}