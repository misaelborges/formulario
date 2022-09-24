let botaoInserir = document.querySelector('#botao')
botaoInserir.addEventListener('click', function(){

    let formulario = document.querySelector('#formulario')

    let corredor = dadosFormulario(formulario)
    let corredorTr = constroiTr(corredor)

    let tabela = document.querySelector('#corredores')
        
    tabela.appendChild(corredorTr)
    formulario.reset()
})

function dadosFormulario(form) {
    let corredor = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        dataNacimento: form.nascimento.value,
        endereco: form.endereco.value,
        cep: form.cep.value,
        numero: form.numero.value,
        email:form.email.value,
        distancia: distancia(checket), 
        idade: idade(nascimeto.value)
    }
    return corredor
}

function constroiTr(corredor) {
    let atividadeTr = document.createElement('tr')
    atividadeTr.classList.add('paciente')

    atividadeTr.appendChild(criarTd(corredor.nome))
    atividadeTr.appendChild(criarTd(corredor.cpf))
    atividadeTr.appendChild(criarTd(corredor.idade))
    atividadeTr.appendChild(criarTd(corredor.numero))
    atividadeTr.appendChild(criarTd(corredor.distancia))

    return atividadeTr
}

function criarTd(dado) {
    var td = document.createElement('td')
    td.textContent = dado
    return td
}


function idade(a){
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - a
    return idade
}

function distancia(d){
    dis = document.querySelectorAll('checket')
    if(dis[0].checked){
        d='5Km'
    } else if(dis[1].checked){
        d='10Km'
    } else if(dis[2].checked){
        d='20Km'
    }
    return d
}