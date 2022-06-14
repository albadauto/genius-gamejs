const dados = []; //Utilizando o conceito de imutabilidade

function insertAll(){
    let newArr = [...dados, {
        nome: nome.value,
        logradouro: logradouro.value,
        numero: numero.value,
        cep: cep.value,
        cidade: cidade.value,
        estado: estado.value,
        dataNascimento: nascimento.value,
        cpf: cpf.value,
        sexo: feminino.checked ? "F" : masculino.checked ? "M" : ""
    }];
    alert("Cadastrado com sucesso!");
    return newArr;
}


document.getElementById("mostrar").addEventListener("click", function(){
    console.log([...insertAll()]);
})