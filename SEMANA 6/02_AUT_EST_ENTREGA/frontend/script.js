$(document).ready(function(){ // "$" é um atalho/alias para "jQuery", que é uma função
    // Evento de clique para alternar a visibilidade do menu
    $('#menu-toggle').click(function(){
        $('nav').toggle();
    });

    let currentIndex = 0; //determina o elemento do carrossel a partir do que ele irá iniciar 
    const images = $('.carrossel img'); // seleciona todas as imagens do carrossel
    const imageCount = images.length; // Conta o número total de imagens no carrossel

    $('.next').click(function(){ // Evento de clique para avançar no carrossel
        images.eq(currentIndex).hide(); // Esconde a imagem atual
        currentIndex = (currentIndex + 1) % imageCount; // Atualiza o índice daquela que é a imagem atual para a próxima
        images.eq(currentIndex).show(); // Mostra a imagem atual
    });

    // Evento de clique para vltar a imagem no carrossel
    $('.prev').click(function(){
        images.eq(currentIndex).hide(); // Esconde a imagem atual
        currentIndex = (currentIndex - 1 + imageCount) % imageCount; // Atualiza o índice daquela que é a imagem atual para a anterior
        images.eq(currentIndex).show(); // Mostra a imagem atual
    });
});
