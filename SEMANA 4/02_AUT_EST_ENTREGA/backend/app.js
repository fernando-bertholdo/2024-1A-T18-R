const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const DBPATH = '../data/dbCurriculo.db'; // Ajuste o caminho do seu banco de dados aqui

app.use(express.json());

// Endpoint para Dados Pessoais
app.get('/dadospessoais', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM Pessoa';
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
    var sql = 'SELECT * FROM Formacao ORDER BY AnoFim DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Endpoint para Experiência
app.get('/experiencia', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM Experiencia ORDER BY AnoFim DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Endpoint para Realizações
app.get('/realizacoes', (req, res) => {
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM Realizacoes ORDER BY Ano DESC';
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
    var sql = 'SELECT * FROM Habilidade ORDER BY NivelProficiencia DESC';
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
    var sql = 'SELECT * FROM Personalidade ORDER BY Nivel DESC';
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
