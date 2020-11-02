class ApontamentosView extends View {
    template(model){
        return `
            <table class = table table-hover table-bordered">
                <thead>
                    <th>Atividade</th>
                    <th>Descrição</th>
                    <th>Início</th>
                    <th>Fim</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    ${model.paraArray().map(apontamento => {
                        return `
                            <tr>
                                <td>${apontamento.atividade.nome}</td>
                                <td>${apontamento.atividade.descricao}</td>
                                <td>${apontamento.atividade.startDate}</td>
                                <td>${apontamento.atividade.endDate}</td>
                            <tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }
}