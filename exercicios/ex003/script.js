function somar() {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var msg = document.getElementById('msg')
    msg.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${n1+n2}.`
}