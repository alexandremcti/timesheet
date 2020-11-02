class View {
    constructor(selector){
        this._elemento = document.querySelector(selector);
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }

    template(model){
        throw new Error('O método template deve ser implementado pela classe herdada');
    }
}