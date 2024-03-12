function tabuada(){
    let msg = document.getElementById('mensagem')
    let n = Number(document.getElementById('num').value)
    msg.innerHTML = ' '
    for(let c = 1; c < 10; c++) {
        msg.innerHTML += `${n} x 0${c} = ${n*c} <br>`
    }
    msg.innerHTML += `${n} x 10 = ${n*10}`
}