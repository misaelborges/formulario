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
        email:form.email.value,
        numero: form.numero.value,
        distancia: form.dist.value,
        idade: calcIdade(form.nascimento.value)   
    }
    return corredor
}

function constroiTr(corredor) {
    let atividadeTr = document.createElement('tr')
    atividadeTr.classList.add('corredor')

    atividadeTr.appendChild(criarTd(corredor.nome, 'info-nome'))
    atividadeTr.appendChild(criarTd(corredor.cpf, 'info-cpf'))
    atividadeTr.appendChild(criarTd(corredor.idade, 'info-idade'))
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

let tabela = document.querySelector('table')
tabela.addEventListener('dblclick', function(event){
    let alvo = event.target
    let paiAlvo = alvo.parentNode
    paiAlvo.classList.add('removeLinha')
    setTimeout(function(){
        paiAlvo.remove()
    }, 500)
})

let campoBusca = document.querySelector('#filtro')
campoBusca.addEventListener('input', function(){

    let pacientes = document.querySelectorAll('.corredor')

    for(let pos = 0; pos < pacientes.length; pos++) {
        let paciente = pacientes[pos]
        let nomeTd = paciente.querySelector('.info-nome')
        let nome = nomeTd.textContent
        let expressaoBusca = new RegExp(this.value, 'i')
        
        if(expressaoBusca.test(nome)) {
            paciente.classList.remove('invisivel')
        } else {
            paciente.classList.add('invisivel')
        }

        if(this.value == '') {
            paciente.classList.remove('invisivel')
        }
    }
})