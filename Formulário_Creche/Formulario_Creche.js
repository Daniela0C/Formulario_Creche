function Enviar(){
    let nomeCrianca = document.getElementById('nome').value
    let dataCrianca = document.getElementById('data').value
    let codigoPostalCrianca = document.getElementById('codigoPostal').value
    let localidadeCrianca = document.getElementById('localidade').value
    let emailCrianca = document.getElementById('email').value
    let senhaCrianca = document.getElementById('senha').value
    let nomeMae = document.getElementById('nomeMae').value
    let dataMae = document.getElementById('dataMae').value
    let codigoMae = document.getElementById('codigoMae').value
    let localidadeMae = document.getElementById('localidadeMae').value
    let nacionalidadeMae = document.getElementById('nacionalidadeMae').value
    let naturalidadeMae = document.getElementById('naturalidadeMae').value
    let profissaoMae = document.getElementById('profissaoMae').value
    let emailMae = document.getElementById('emailMae').value
    let nomePai = document.getElementById('nomePai').value
    let dataPai = document.getElementById('dataPai').value
    let codigoPai = document.getElementById('codigoPai').value
    let localidadePai = document.getElementById('localidadePai').value
    let nacionalidadePai = document.getElementById('nacionalidadePai').value
    let naturalidadePai = document.getElementById('naturalidadePai').value
    let profissaoPai = document.getElementById('profissaoPai').value
    let emailPai = document.getElementById('emailPai').value

    let residencia = document.querySelector("input[name='reside']:checked").value
    let cor = document.querySelector("input[name='cor']:checked").value
    let sexo = document.querySelector("input[name='sexo']:checked").value
    let alergia = document.querySelector("input[name='alergia']:checked").value
    let estadoCivilMae = document.querySelector("input[name='estadoCivilMae']:checked").value
    let estadoCivilPai = document.querySelector("input[name='estadoCivilPai']:checked").value

    alert('O nome da criança é: ' + nomeCrianca + 
    '\n' + 'A criança nasceu: ' + dataCrianca + 
    '\n' + 'O codigo postal da criança é: ' + codigoPostalCrianca + 
    '\n' + 'A localidade da criança é: ' + localidadeCrianca +
    '\n' + 'O email da criança é: ' + emailCrianca +
    '\n' + 'A senha de entrada da criança é: ' + senhaCrianca +
    '\n' + 'A criança reside com: ' + residencia +
    '\n' + 'A cor/raça da criança é: ' + cor +
    '\n' + 'O sexo da criança é: ' + sexo +
    '\n' + 'A criança é alérgica a: ' + alergia +
    '\n\n' + 'O nome da mãe é: ' + nomeMae +
    '\n' + 'A Mãe nasceu: '+ dataMae +
    '\n' + 'O codigo postal da Mãe é: ' + codigoMae + 
    '\n' + 'A localidade da Mãe é; ' + localidadeMae +
    '\n' + 'A nacionalidade da Mãe é: ' + nacionalidadeMae +
    '\n' + 'O naturalidade da Mãe é: ' + naturalidadeMae +
    '\n' + 'A profissão da Mãe é: ' + profissaoMae +
    '\n' + 'O email da Mãe é: ' + emailMae +
    '\n\n' + 'O nome do Pai é: ' + nomePai +
    '\n' + 'O pai nasceu: '+ dataPai +
    '\n' + 'O codigo postal do Pai é: ' + codigoPai + 
    '\n' + 'A localidade do Pai é: ' + localidadePai +
    '\n' + 'A nacionalidade do Pai é: ' + nacionalidadePai +
    '\n' + 'O naturalidade do Pai é: ' + naturalidadePai +
    '\n' + 'A profissão do Pai é: ' + profissaoPai +
    '\n' + 'O email do Pai é: ' + emailPai +
    '\n\nn' + 'O estado cívil da Mãe é: ' + estadoCivilMae +
    '\n' + 'O estado cívil do Pai é: ' + estadoCivilPai)

    window.location.href='inicioFormulario.html'
}

function Voltar(){

    window.location.href='Formulario_Creche.html'
}