// /*              PREENCHENDO UM ARRAY              */

// /* INSTRUÇÕES EQUIVALENTES: */ {
//     const arr1 = [];
//     arr1[0] = "elemento1";
//     arr1[1] = "elemento2";
//     arr1[2] = "elemento3";

//     const arr2 = new Array("elemento1", "elemento2", "elemento3");

//     const arr3 = ["elemento1", "elemento2", "elemento3"];
// }


// /* COMPREENDENDO O COMPRIMENTO: */ {

//     /* A largura sempre é igual ao último índice + 1: */
//         const cats1 = [];
//         cats1[30] = ["Dusty"];
//         console.log(cats1.length); // 31

//     /* Atribuir 0 ao length esvazia o array: */
//         const cats2 = ["Dusty", "Misty", "Twiggy"];
//         console.log(cats2.length); // 3

//         cats2.length = 2;
//         console.log(cats2); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

//         cats2.length = 0;
//         console.log(cats2); // []; the cats array is empty

//         cats2.length = 3;
//         console.log(cats2); // [ <3 empty items> ]
// }


// /* ITERANDO SOBRE MATRIZES: */ {
//     const colors = ["red", "green", "blue"];
//     for (let i = 0; i < colors.length; i++) {
//         console.log(colors[i]);
//     }

//     const divs = document.getElementsByTagName("div");
//         for (let i = 0, div; (div = divs[i]); i++) {
//             /* Process div in some way */
//         }      
// }

const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color))