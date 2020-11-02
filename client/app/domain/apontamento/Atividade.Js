class Atividade {
    constructor(_nome = '', _descricao = ''){
        this._nome = _nome;
        this._descricao = _descricao;
        this._createdDate = new Date();
        this._startDate = null;
        this._endDate = null;
    }

    get nome(){
        return this._nome;
    }

    get descricao(){
        return this._descricao;
    }

    get startDate(){
        return this._startDate;
    }

    get endDate(){
        return this._endDate;
    }

    set nome(nome){
        this._nome = nome;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    set startDate(date) {
        this._startDate = date;
    }

    set endDate(date){
        this._endDate = date;
    }

}