function SucAnt() {
    let n = Number(document.getElementById('num').value)
    let msg = document.getElementById('mensagem')
    msg.innerHTML = `Analisando o valor ${n}, seu antecessor é ${n-1} e o seu sucessor é ${n+1}`
}