let esperandoResposta = true
let vezes = 0
while (esperandoResposta) {
    console.log('Esperando a resposta do colega no whatsapp...')
    esperandoResposta = Math.random() > 0.1
    vezes++
}

console.log(`Oi colega! Você demorou ${vezes} tentativas para responder.`)