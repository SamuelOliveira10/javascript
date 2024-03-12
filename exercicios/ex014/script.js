function conversorTemp(){
    let msg = document.getElementById('mensagem')
    let cels = Number(document.getElementById('celsius').value)
    let fahr = cels * 9/5 + 32
    msg.innerHTML = `A temperatura de ${cels}°C corresponde a ${fahr.toFixed(1)}°F`
}