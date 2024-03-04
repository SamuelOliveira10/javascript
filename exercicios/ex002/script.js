function mostrar() {
    let msg = document.getElementById('resp')
    let nome = document.getElementById('nome').value
    if (nome.length == 0) {
        alert('Digite um nome!')
    } else {
        msg.innerHTML = `É um prazer te conhecer, ${nome}!`
    }
}