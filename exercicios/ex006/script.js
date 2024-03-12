function doTriSqrt() {
    let msg = document.getElementById('mensagem')
    let n = Number(document.getElementById('num').value)
    msg.innerHTML = `
    O dobro de ${n} vale ${n*2} <br>
    O triplo de ${n} vale ${n*3} <br>
    A raiz quadrada de ${n} é ${Math.sqrt(n).toFixed(2)}
    `
}