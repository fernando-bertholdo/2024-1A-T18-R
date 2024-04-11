const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const DBPATH = '../data/dbCurriculo.db'; // Ajuste o caminho do seu banco de dados aqui

app.use(express.json());

// Endpoint para detalhes pessoais (Pessoal)
app.get('/pessoal', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT Nome, Foto, Endereco, Telefone, Email, Sobre_Mim FROM Pessoal';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Endpoint para Formação
app.get('/formacao', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT Instituicao, Grau, Curso, Data_Inicio, Data_Termino, Descricao FROM Formacao ORDER BY Data_Termino DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Endpoint para Experiências
app.get('/experiencias', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT Empresa, Titulo, Data_Inicio, Data_Termino, Descricao FROM Experiencia ORDER BY Data_Termino DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Endpoint para Habilidades
app.get('/habilidades', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT Habilidade, Proficiencia FROM Habilidades ORDER BY Proficiencia DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Endpoint para Personalidade
app.get('/personalidade', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT Traco, Descricao FROM Personalidade';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
