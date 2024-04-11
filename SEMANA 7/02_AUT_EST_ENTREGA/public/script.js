$(document).ready(function(){ // "$" em JQuery é um atalho/alias para "jQuery", que é uma função
    // Evento de clique para alternar a visibilidade do menu
    $('#menu-toggle').click(function(){
        $('nav').toggle();
    });

    let currentIndex = 0; //determina o elemento do carrossel a partir do que ele irá iniciar 
    const images = $('.carrossel img'); // cria a variável images que contém o elemento carrossel do html e seleciona todas as imagens dentro dele
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

    function loadFormacao() {
        $.ajax({
            url: '/formacao', // Endpoint do servidor que retorna os dados de formação
            type: 'GET',
            success: function(data) {
                // Processa a resposta e atualiza o conteúdo do div #formacao-content
                var formacaoHtml = ''; // Cria uma variável para armazenar o HTML
                data.forEach(function(formacao) {
                    formacaoHtml += '<p>' + formacao.Instituicao + ' - ' + formacao.Curso + '</p>'; // Cria um parágrafo com o nome da instituição e do curso puxando da base de dados
                });
                $('#formacao-content').html(formacaoHtml); // Atualiza o conteúdo do div #formacao-content
            },
            error: function(xhr, status, error) {
                // Caso ocorra algum erro na requisição
                console.error('Erro ao buscar dados de formação:', error);
            }
        });
    }

    // Chama a função loadFormacao() ao carregar a página
    loadFormacao();

});
