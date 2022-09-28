let botaoInserir = document.querySelector('#botao')
botaoInserir.addEventListener('click', function(){

    let formulario = document.querySelector('#formulario')

    let corredor = dadosFormulario(formulario)
    if((corredor.nome === '') || (corredor.cpf === '') || (corredor.nascimento === '') || (corredor.endereco === '') || (corredor.cep === '') || (corredor.numero === '') || (corredor.email === '')) {
        window.alert('Campo em Branco')
    } else {
        let corredorTr = constroiTr(corredor)

        let tabela = document.querySelector('#corredores')
            
        tabela.appendChild(corredorTr)
        formulario.reset()
    }
})

function dadosFormulario(form) {
    let corredor = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        nascimento: form.nascimento.value,
        endereco: form.endereco.value,
        cep: form.cep.value,
        numero: form.numero.value,
        email:form.email.value,
        distancia: form.dist.value,
    }
    return corredor
}

function constroiTr(corredor) {
    let atividadeTr = document.createElement('tr')
    atividadeTr.classList.add('corredor')

    atividadeTr.appendChild(criarTd(corredor.nome, 'info-nome'))
    atividadeTr.appendChild(criarTd(corredor.cpf, 'info-cpf'))
    atividadeTr.appendChild(criarTd(calcIdade(corredor.nascimento), 'info-idade'))
    atividadeTr.appendChild(criarTd(corredor.numero, 'info-numero'))
    atividadeTr.appendChild(criarTd(corredor.distancia, 'info-distancia'))

    return atividadeTr
}

function criarTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function calcIdade(dataNascto) {
    var d = new Date()
    ano_atual = d.getFullYear()
    mes_atual = d.getMonth() + 1
    dia_atual = d.getDate()

    niver = new Date(dataNascto)

    ano_aniversario = niver.getFullYear()
    mes_aniversario = niver.getMonth()
    dia_aniversario = niver.getDate()

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}