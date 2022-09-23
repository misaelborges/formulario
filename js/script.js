let botao = document.querySelector('#botao')
botao.addEventListener('click', function(){
    let formulario = document.querySelector('#formulario')

    let atividade = listaCorredor(formulario)

    if (atividade.nome == '' || atividade.cpf == '' || atividade.nascimeto == '' || atividade.endereco == '' || atividade.cep == '' || atividade.numero == '' || atividade.email == '' || atividade.checket == ''){
        window.alert('preencher todos os campo!!!')
    } else {
        let atividadeTr = constroiTr(atividade)
        let tabela = document.querySelector('#corredores')
        tabela.appendChild(atividade)
        formulario.reset()
    }
})

function listaCorredor(dados) {
    let corredor = {
        nome: dados.nome.value,
        cpf: dados.cps.value,
        nascimeto: dados.nascimeto.value,
        endereco: dados.endereco.value,
        cep: dados.cep.value,
        numero: dados.numero.value,
        email: dados.email.value,
        checket: dados.checket.value,
        distancia: distancia(checket), 
        idade: idade(nascimeto.value)
    }
    return corredor
}

function constroiTr(paciente) {
    let atividadeTr = document.createElement('tr')
    atividadeTr.classList.add('paciente')

    atividadeTr.appendChild(constroiTd(paciente.nome))
    atividadeTr.appendChild(constroiTd(paciente.cpf))
    atividadeTr.appendChild(constroiTd(paciente.idade))
    atividadeTr.appendChild(constroiTd(paciente.numero))
    atividadeTr.appendChild(constroiTd(paciente.distancia))

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