class Apontamentos {
    constructor(){
        this._apontamentos = [];
    }


    adiciona(apontamento){
        this._apontamentos.push(apontamento);
    }

    paraArray(){
        return [].concat(this._apontamentos);
    }
}