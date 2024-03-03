function verif() {

//Variáveis
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('msg')
    var nasc = document.getElementById('idade').value
    var sex = document.getElementsByName('sexo')
    var imagem = document.getElementById('foto')
    var genero = ''


//Validação de Dados
    if (nasc.length == 0 || nasc < ano - 120 || nasc > ano) {
        window.alert('[ERRO preencha os campos corretamente]')
    } else {
        idade = ano - nasc
        if (sex[0].checked) {
            msg.innerHTML = `Você é um homem de ${idade} anos`
            genero = 'M'
        } else if (sex[1].checked) {
            msg.innerHTML = `Você é uma mulher de ${idade} anos`
            genero = 'F'
        } else {
            alert('[ERRO] preencha os campos corretamente')
        }
    }


//Imagem Aparecer
    if (genero == 'M') {
        document.body.style.backgroundColor = 'rgb(62, 149, 179)'
        if (idade < 14) {
            imagem.style.backgroundImage = 'url(imagens/foto-criança-m.jpg)'
        } else if (idade < 20) {
            imagem.style.backgroundImage = 'url(imagens/foto-jovem-m.jpg'
        } else if (idade < 60) {
            imagem.style.backgroundImage = 'url(imagens/foto-adulto-m.jpg'
        }else {
            imagem.style.backgroundImage = 'url(imagens/foto-idoso-m.jpg'
        }
    } else if (genero == 'F') {
        document.body.style.backgroundColor = 'rgb(224, 93, 93)'
        if (idade < 14) {
            imagem.style.backgroundImage = 'url(imagens/foto-criança-f.jpg'
        } else if (idade < 20) {
            imagem.style.backgroundImage = 'url(imagens/foto-jovem-f.jpg'
        } else if (idade < 60) {
            imagem.style.backgroundImage = 'url(imagens/foto-adulta-f.jpg'
        } else {
            imagem.style.backgroundImage = 'url(imagens/foto-idosa-f.jpg'
        }
    }
}
