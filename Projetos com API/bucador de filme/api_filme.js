let buscaFilme = async () => {
    let filme = document.getElementById('titulo').value;
    let url = `https://www.omdbapi.com/?apikey=b6ff2a95&t=${filme}`;
    let resposta = await fetch(url);
    let respostaJson = await resposta.json();
    document.getElementById("Title").value = respostaJson.Title;
    document.getElementById("Year").value = respostaJson.Year;
    document.getElementById("Released").value = respostaJson.Released;
    document.getElementById("Runtime").value = respostaJson.Runtime;
    document.getElementById("Genre").value = respostaJson.Genre;
    document.getElementById("BoxOffice").value = respostaJson.BoxOffice;
    document.getElementById("Poster").src = respostaJson.Poster;
    document.getElementById("Plot").value = respostaJson.Plot;
}
