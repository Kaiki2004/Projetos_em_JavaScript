let  buscarcep = async () => {
    let cep = document.getElementById("CEP").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let resposta = await fetch(url);
    let respostaJson = await resposta.json();
    document.getElementById("logradouro").value = respostaJson.logradouro;
    document.getElementById("bairro").value = respostaJson.bairro;
    document.getElementById("localidade").value = respostaJson.localidade;
    document.getElementById("complemento").value = respostaJson.complemento;
    document.getElementById("uf").value = respostaJson.uf;
    document.getElementById("ddd").value = respostaJson.ddd;
}