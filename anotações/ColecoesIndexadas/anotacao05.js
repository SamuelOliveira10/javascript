/*           MATRIZES MULTIDIMESIONAIS            */

/* Criando uma matriz multidimensional: */ {
    const a = new Array(4);
    for (let i = 0; i < 4; i++) {
        a[i] = new Array(4);
        for (let j = 0; j < 4; j++) {
            a[i][j] = `[${i}, ${j}]`;
        }   
    }
}

/*          ARMAZENANDO OUTRAS PROPRIEDADES           */ {
    const arr = [1, 2, 3];
    arr.regEx = /^[A-Za-z]+$/
    let num = 90509958
    let str = "Samuel"
    console.log(arr.regEx.test(num)) // false 
    console.log(arr.regEx.test(str)) // true 
}

/*          OBJETOS SEMELHANTES A ARRAYS            */ {
    /* Iterando sobre strings: */ {
        Array.prototype.forEach.call("a string", (chr) => {
            console.log(chr);
        })
    }
}