function verif() {
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('msg')
    var nasc = document.getElementById('idade').value
    var sex = document.getElementsByName('sexo')
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
}
