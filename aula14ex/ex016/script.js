function contar() {
    var ni = Number(document.getElementById('ini').value)
    var nf = Number(document.getElementById('fim').value)
    var np = Number(document.getElementById('step').value)
    var res = document.getElementById('msg')

    res.innerHTML = `Você quer contar do número ${ni} até o número ${nf} de ${np} em ${np}`
}