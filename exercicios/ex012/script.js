function descontar(){
    let msg = document.getElementById('mensagem')
    let p = Number(document.getElementById('preco').value)
    let desc = p - p/100 * 5
    msg.innerHTML = `O produto que custava R$${p}, na promoção com desconto de 5% vai custar R$${desc.toFixed(2)}`
}