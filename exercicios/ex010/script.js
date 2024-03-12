function cambio(){
    let msg = document.getElementById('mensagem')
    let rs = Number(document.getElementById('real').value)
    let doll = rs / 4.98
    msg.innerHTML = `Com R$${rs} você pode comprar US$${doll.toFixed(2)}`
}