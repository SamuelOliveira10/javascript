// function analisar() {
//     var msg = document.getElementById('msg')
//     var dado = document.getElementById('info').value

//     msg.innerHTML = `
//     O tipo primitivo desse dado é: ${typeof(dado)} <br>
//     Só tem espaços? ${isSpace(dado)} <br>
//     É alfabético? ${isAlpha(dado)} <br>
//     É um número? ${isNumeric(dado)} <br>
//     É alfanumérico? ${isAlNum(dado)} <br>
//     Está em maiúsculas? ${isUpper(dado)} <br>
//     Está em minúsculas? ${isLower(dado)} <br>
//     Está capitalizada? ${isTitle(dado)}
//     `
// }



const regEx = {
    space: /^[ ]+$/
}

// function isSpace(str) {
//     if (regEx.space.test(str)) {
//         'Sim'
//     } else { 
//         'Não'
//     }
// }


/* TENTAR FAZER UMA ARROW FUNCTION */
const space = 

console.log(isSpace('           '))
console.log(regEx)

function isAlpha(str) {
    let alpha = /^[a-zA-z]+$/
    if (alpha.test(str)) {
        return 'Sim'
    } else { 
        return 'Não'
    }
}


function isNumeric(str) {
    let numeric = /^[0-9]+$/
    if (numeric.test(str)) {
        return 'Sim'
    } else { 
        return 'Não'
    }
}

function isAlNum(str) {
    let alnum = /^[a-zA-Z0-9]+$/
    if (alnum.test(str)) {
        return 'Sim'
    }
    else {
        return 'Não'
    }
}

function isUpper(str) {
    let upper = /^[A-Z]+$/
    if (upper.test(str)) {
        return 'Sim'
    } else {
        return 'Não'
    }
}

function isLower(str) {
    let lower = /^[a-z]+$/
    if (lower.test(str)) {
        return 'Sim'
    } else {
        return 'Não'
    }
}

function isTitle(str) {
    let title = /^([A-Z]{1}[a-z]+)+$/
    let titles = /^([A-Z]{1}[a-z]+)+[ ]([A-Z]{1}[a-z]+)+$/
    
    if (title.test(str) || titles.test(str)) {
        return 'Sim'
    } else {
        return 'Não'
    }
}
