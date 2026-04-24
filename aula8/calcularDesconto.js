function calcularDesconto(preco, percentual) {
    return preco - (preco * (percentual/100));
}

console.log(`O valor com desconto é: R$`, calcularDesconto(200, 10));
console.log(`O valor com desconto é: R$`, calcularDesconto(150, 20));