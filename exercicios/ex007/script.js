function media() {
    let msg = document.getElementById('mensagem')
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)

    msg.innerHTML = `A média entre ${n1} e ${n2} é igual a ${(n1 + n2) / 2}`
}