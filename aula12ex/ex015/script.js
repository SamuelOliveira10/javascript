function verif() {
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('msg')
    var nasc = document.getElementById('idade').value
    var sex = document.getElementsByName('sexo')
    var imagem = document.getElementById('foto')
    var genero = ''

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

    if (genero == 'M') {
        if (idade < 5) {
            imagem.innerHTML = `Bebê masculino`
        } else if (idade < 14) {
            imagem.innerHTML = `Criança masculina`
        } else if (idade < 20) {
            imagem.innerHTML = `Adolescente masculino`
        } else if (idade < 60) {
            imagem.innerHTML = `Adulto masculino`
        }else {
            imagem.innerHTML = `Idoso masculino`
        }

    } else if (genero == 'F') {
        if (idade < 5) {
            imagem.innerHTML = `Bebê feminino`
        } else if (idade < 14) {
            imagem.innerHTML = `Criança feminina`
        } else if (idade < 20) {
            imagem.innerHTML = `Adolescente feminina`
        } else if (idade < 60) {
            imagem.innerHTML = `Adulta feminina`
        } else {
            imagem.innerHTML = `Idosa feminina`
        }
    }
}
