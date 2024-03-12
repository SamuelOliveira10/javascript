function calcPagar(){
    let msg = document.getElementById('mensagem')
    let d = Number(document.getElementById('dia').value)
    let rod = Number(document.getElementById('rodados').value)
    d *= 60
    rod *= 0.15
    pag = d + rod
    msg.innerHTML = `O total a pagar é de R$${pag.toFixed(2)}`
}