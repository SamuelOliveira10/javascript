function insert(num){
    const result = document.getElementById('conteudo')
    let numero = document.getElementById('conteudo').innerHTML
    result.innerHTML += num
}

function clean(){
    const result = document.getElementById('conteudo')
    result.innerHTML = ''
    var numero = ''
}

function backSpace(){
    let result = document.getElementById('conteudo').innerHTML 
    document.getElementById('conteudo').innerHTML = result.substring(0, result.length -1)
}

function count(){
    let result = document.getElementById('conteudo').innerHTML
    let numero
    if (result) {
        numero = eval(result)
        document.getElementById('conteudo').innerHTML = numero/100
    }

}

function result(){
    let result = document.getElementById('conteudo').innerHTML
    if (result) {
        document.getElementById('conteudo').innerHTML = eval(result)
    }
}