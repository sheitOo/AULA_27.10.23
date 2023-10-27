const express = require  ('express')
const app = express ()
app.use(express.json())

let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks),um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
]

//ponto de acesso para uma requição get \oi
app.get('/oi', (req, res) => res.send('oi'));

//endPoint para exibir os filmes
app.get('/filmes', (req, res) => res.send(filmes));

//endpoint para armazenar um novo filme em memória
app.post('/filmes', (req, res) => {
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const filme = {
        titulo: titulo,
        sinopse: sinopse
    };
    filmes.push(filme);
    //só para conferir
    res.json(filmes);
})

app.listen(3000, () => console.log("up and running"));