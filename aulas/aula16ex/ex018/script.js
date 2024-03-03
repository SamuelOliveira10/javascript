var num = []

function adicionar() {
    let n = document.getElementById('num').value
    let caixa = document.getElementById('info')

    if (n.length == 0) {
        alert('Digite um valor!')
    } else if (n < 1 || n > 100) {
        alert('Digite um valor entre 1 e 100')
    } else if (num.indexOf(n) != -1) {
        alert('O valor ja foi adicionado')
    } else {
        num.push(n)
        let opt = document.createElement('option')
        opt.text = `O valor ${n} foi adicionado`
        caixa.appendChild(opt)
    }
}


function finalizar() {
    let res = document.getElementById('resultado')
    let nElem = num.length
    num.sort()
    let mai = num[nElem - 1]
    let men = num[0]
    let soma = 0
    let media = 0

    for(let pos in num) {
        soma += Number(num[pos])
    }

    media = soma/nElem

    res.innerHTML = `
    Ao todo temos <strong>${nElem}</strong> números cadastrados!. <br>
    O maior valor informado foi <strong>${mai}</strong>. <br>
    O menor valor informado foi <strong>${men}</strong>. <br>
    Somando todos os valores, temos <strong>${soma}</strong>. <br>
    A média dos valores digitados é <strong>${media}</strong>.
    `
}