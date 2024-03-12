function pintar(){
    let msg = document.getElementById('mensagem')
    let larg = Number(document.getElementById('largura').value)
    let alt = Number(document.getElementById('altura').value)
    let area = larg*alt
    msg.innerHTML = `
    Sua parede tem a dimensão de ${larg}x${alt} e sue área é de ${area}m².
    Para pintar essa parede, você precisará de ${area/2}L de tinta.
    `
}