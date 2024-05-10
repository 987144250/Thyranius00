function substituir() {
    var frase00 = document.getElementById("frase0"); // Atribui uma variavel para a frase padrão em HTML
    var rand = ["<b>NÃO ESQUECER A SENHA!</b>", "<b>NOOBs</b>"];     // Criar lista com novas frases a serem usadas
    var indice = Math.floor(Math.random() * rand.length); // Criando alternador randomico (função math * quantia de itens na lista rand)
    frase00.innerHTML = rand[indice];
}

setInterval(substituir, 2000); // Função do JS de repetição (2000 = 2 segundos aprox para alterar frase)

// setInterval é uma função em JavaScript. Ela é uma função integrada à linguagem JavaScript que é usada para repetir a execução de uma função ou a avaliação de uma expressão em intervalos de tempo regulares.