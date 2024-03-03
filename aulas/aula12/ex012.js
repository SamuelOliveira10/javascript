var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são precisamente ${hora}:${min}`)

if (hora < 6) {
    console.log('Você devia estar dormindo!!')
} else if (hora < 12) {
    console.log('Bom dia!!')
} else if (hora < 18) {
    console.log('Boa Tarde!!')
} else {
    console.log('Boa noite!!')
}

