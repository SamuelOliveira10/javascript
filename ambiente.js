const txt = 100

const regEx = {
    space: /^[ ]+$/,
    alpha: /^[a-zA-Z]+$/,
    numeric: /^[\d]+$/,
    alNum: /^[a-zA-Z\d]+$/,
    upper: /^[A-Z]+$/,
    lower: /^[a-z]+$/,
    title: /^[A-Z][a-z]+$/,
    titles: /^([A-Z][a-z]+[ ][A-Z][a-z]+)+$/
}

const funcao = {
    isSpace: (str) => regEx.space.test(str)? 'Sim' : 'Não',
    isAlpha: (str) => regEx.alpha.test(str)? 'Sim' : 'Não',
    isNumeric: (str) => regEx.numeric.test(str)? 'Sim' : 'Não',
    isAlNum: (str) => regEx.alNum.test(str)? 'Sim' : 'Não',
    isUpper: (str) => regEx.upper.test(str)? 'Sim' : 'Não',
    isLower: (str) => regEx.lower.test(str)? 'Sim' : 'Não',
    isTitle: (str) => regEx.title.test(str) || regEx.titles.test(str)? 'Sim' : 'Não'
}

console.log(`
Você digitou: ${txt}
Seu tipo primitivo é: ${typeof txt}
Só tem espaços? ${funcao.isSpace(txt)}
É um número? ${funcao.isNumeric(txt)}
É alfabético? ${funcao.isAlpha(txt)}
É alfanumérico? ${funcao.isAlNum(txt)}
Está em maiúsculas? ${funcao.isUpper(txt)}
Está em minúsculas? ${funcao.isLower(txt)}
Está capitalizada? ${funcao.isTitle(txt)}
`)