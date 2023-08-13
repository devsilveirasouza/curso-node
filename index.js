const express = require('express');

const server = express();

const port = 3000;

server.use(express.json());
// Array com os dados
const pessoas = ['Joao', 'Maria', 'Jose'];

// Lista um resgitro
server.get('/pessoas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(pessoas[index]);
})

// Lista todos os registros
server.get('/pessoas', (req, res) => {    
    return res.json(pessoas);
})

// Salva um registro
server.post('/pessoas', (req, res) => {
    const { name } = req.body;
    pessoas.push(name);

    return res.json(pessoas);
})

// Atualiza um registro
server.put('/pessoas/:index', (req, res) => {
    const { index } = req.params;
    const { name }  = req.body;

    pessoas[index] = name;

    return res.json(pessoas);
})

// Deletar um registro
server.delete('/pessoas/:index', (req, res) => {
    const { index } = req.params;

    pessoas.splice(index, 1);
    return res.json({ message: "O registro foi deletado com sucesso!" });
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);   // eslint-disable-line no-console
});