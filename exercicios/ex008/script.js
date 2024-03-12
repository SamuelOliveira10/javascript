function converter(){
    let msg = document.getElementById('mensagem')
    let n = Number(document.getElementById('num').value)
    msg.innerHTML = `
    A medida de ${n}m corresponde a: <br>
    ${n * 10**-3}km <br>
    ${n * 10**-2}hm <br>
    ${n * 10**-1}dam <br>
    ${n * 10**1}dm <br>
    ${n * 10**2}cm <br>
    ${n * 10**3}mm <br>
    `
}