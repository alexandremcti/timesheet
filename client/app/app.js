const controller = new ApontamentoController();
const $ = document.querySelector.bind(document);

$('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));