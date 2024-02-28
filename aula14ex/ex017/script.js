function tabuada() {
    var msg = document.getElementById('tab')
    var n = document.getElementById('num').value
    msg.innerText = ''

    if (n.length == 0){
        alert('Digite um número válido')
    }
    else {
        for (var c = 1; c <= 10; c++) {
        msg.innerHTML += `${n}x${c}=${n*c}     `
    }
    }
}