function substituir() {
    var frase00 = document.getElementById("frase0"); // Atribui uma variavel para a frase padrão em HTML
    var rand = ["NÃO ESQUECER A SENHA!", "NOOBs"];     // Criar lista com novas frases a serem usadas
    var indice = Math.floor(Math.random() * rand.length); // Criando alternador randomico (função math * quantia de itens na lista rand)
    frase00.textContent = rand[indice];
}

setInterval(substituir, 3000);