function calcularDesconto() {
    // Obter os valores dos inputs
    let preco = parseFloat(document.getElementById('preco').value);
    let porcentagem = parseFloat(document.getElementById('desconto').value);

    // Verificar se os valores são válidos
    if (isNaN(preco) || isNaN(porcentagem)) {
        alert("Erro: Por favor, preencha ambos os campos com números válidos.");
        console.log("Erro: campos vazios ou valores inválidos.");
        return;
    }

    if (preco < 0) {
        alert("Erro: O preço do produto não pode ser negativo.");
        console.log("Erro: Preço negativo inserido: R$", preco);
        return;
    }

    if (porcentagem < 0) {
        alert("Erro: A porcentagem de desconto não pode ser negativa.");
        console.log("Erro: Porcentagem negativa inserida:", porcentagem + "%");
        return;
    }

    if (porcentagem > 100) {
        alert("Atenção: O desconto não pode ser maior que 100%. Usando 100% como limite.");
        console.log("Aviso: Porcentagem maior que 100% ajustada para 100%.");
        porcentagem = 100;
    }

    // Calcular o valor do desconto e o preço final
    let valorDesconto = (preco * porcentagem) / 100;
    let precoFinal = preco - valorDesconto;

    // Garantir que o preço final não fique negativo
    if (precoFinal < 0) {
        precoFinal = 0;
    }

    // Exibir no console
    console.log("=== RESULTADO DO CÁLCULO ===");
    console.log("Preço original: R$", preco.toFixed(2));
    console.log("Porcentagem de desconto:", porcentagem + "%");
    console.log("Valor do desconto: R$", valorDesconto.toFixed(2));
    console.log("Preço final: R$", precoFinal.toFixed(2));
    console.log("============================");

    // Exibir alerta com o resultado
    alert("📊 RESULTADO:\n\n" +
          "Preço original: R$ " + preco.toFixed(2) + "\n" +
          "Desconto (" + porcentagem + "%): R$ " + valorDesconto.toFixed(2) + "\n" +
          "Preço final: R$ " + precoFinal.toFixed(2));
}