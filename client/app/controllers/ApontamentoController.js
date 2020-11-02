class ApontamentoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputAtividade = $('#atividade');
        this._inputDescricao = $('#descricao');
        this._apontamentos = new Apontamentos();
        this._apontamentosView = new ApontamentosView('#apontamentos');
        this._apontamentosView.update(this._apontamentos);
    }

    adiciona(event){
        event.preventDefault();
        console.log('adicionando uma apontamento');
        this._apontamentos.adiciona(new Apontamento(this._inputAtividade.value, this._inputDescricao.value));
        console.log(this._apontamentos.paraArray());
        this._apontamentosView.update(this._apontamentos);
    }

    iniciaAtividade(){
        
    }
}