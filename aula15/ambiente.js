let num = [5, 8, 2, 9, 3, 4, 1, 6, 7, 10, 0]


/*
console.log(`Nosso vetor é o ${num }`)

num[3] = ('Samuel')

console.log(`Agora nosso vetor é ${num}`)

num.sort()

console.log(`Nosso vetor em ordem é ${num}`)
*/


/*
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/


/*
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

let pos = num.indexOf(22)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}