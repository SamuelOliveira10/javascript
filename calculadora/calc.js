var numero
function insert(num) {
    const result = document.getElementById('conteudo')
    if (num == '.'){
        if (numero === undefined){
            result.innerHTML = '0.'
            numero = '0.'
        } else if (numero.indexOf('.') == -1){
            result.innerHTML += '.'
            numero += '.'
        }
    } else {
        result.innerHTML += num
        numero += num
    }
}

function clean() {
    const result = document.getElementById('conteudo')
    result.innerHTML = ''
    var numero = ''
}