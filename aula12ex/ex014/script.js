var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()


//Declaração de variáveis
var fund = document.getElementById('fundo')
var hor = document.getElementById('horario')
var img = document.getElementById('imagem')
var msg = document.getElementById('msg')
var zerom = ''
var zeroh = ''

//var hora = 5
//var min = 4


//Correção de erro
if (min < 10) {
    zerom = 0
}
if (hora < 10) {
    zeroh = 0
}


//Texto inicial
hor.innerHTML = `Agora são precisamente <strong>${zeroh}${hora}:${zerom}${min}</strong></p>`


//Funcionamento
if (hora < 6) {
    fund.style.backgroundColor = 'rgb(20, 20, 20)'
    img.style.backgroundImage = 'url(imagens/madrugada.jpg)'
    msg.innerHTML = 'Você devia estar <strong>dormindo!!</strong>'
} else if (hora < 12) {
    fund.style.backgroundColor = 'goldenrod'
    img.style.backgroundImage = 'url(imagens/manhã.jpg)'
    msg.innerHTML = 'Bom dia!!'
} else if (hora < 18) {
    fund.style.backgroundColor = 'orange'
    img.style.backgroundImage = 'url(imagens/tarde.jpg'
    msg.innerHTML = 'Boa tarde!!'
} else {
    fund.style.backgroundColor = 'rgb(40, 40, 40)'
    img.style.backgroundImage = 'url(imagens/noite.jpg)'
    msg.innerHTML = 'Boa noite!!'
}