class Apontamento {
    constructor(nome, descricao){
        this._atividade = new Atividade(nome, descricao);
        Object.freeze(this);
    }

    get atividade(){
        return this._atividade;
    }

    iniciaAtividade(){
        this._atividade._startDate(new Date());
    }


}