

function aumentarjanela(element) { // usa-se 'element' nos parenteses quando não houver variavel atribuida com div de box especifica;
    
    if (element.classList.contains('box-manuais')) { // use o classList.contains(nome da janela) para criar condições dentro dela.
                                                     // essa em específico teve a ver com a altura do box-manuais ser maior q os demais.
        element.style.height = "400px"
    } else if (element.classList.contains('box-livros')) {
        element.style.height = "500px"
    
    } else {
        element.style.height = "400px"
    }
    
    setTimeout(function() {
        // Mostra o texto com transição
  
        // use o classList.contains(nome da janela) para criar condições dentro dela(surgir):

    if (element.classList.contains('box-imagens')) { // "Se o elemento clicado foi a janela: imagens:"
        element.querySelector('.lista-box01').style.opacity = "1";
        element.querySelector('.lista-box01').style.display = 'block'
    } else if (element.classList.contains('box-livros')) {
        element.querySelector('.lista-box02').style.opacity = "1";
        element.querySelector('.lista-box02').style.display = 'block'
    } else if (element.classList.contains('box-manuais')) {
        element.querySelector('.lista-box03').style.opacity = "1";
        element.querySelector('.lista-box03').style.display = 'block'
       
    }

}, 50); // Velocidade de janela expandindo
}

function diminuirjanela(element) {
    element.style.height = "100px"; // Janela volta para o tamanho original
    
    // Mostra o texto com transição
    setTimeout(function() {
        if (element.classList.contains('box-imagens')) { // use o classList.contains(nome da janela) para criar condições dentro dela.
            element.querySelector('.lista-box01').style.display = 'none'; // Desativa a exibição na tela
        } else if (element.classList.contains('box-livros')) {
            element.querySelector('.lista-box02').style.display = 'none'; // Desativa a exibição na tela
        } else if (element.classList.contains('box-manuais')) {
            element.querySelector('.lista-box03').style.display = 'none'; // Desativa a exibição na tela
            
        }
        
       
       // Mostra o texto com transição
    }, 50);
}
