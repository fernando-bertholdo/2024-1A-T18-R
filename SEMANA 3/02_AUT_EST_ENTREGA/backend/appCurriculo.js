const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '/SEMANA 3/02_AUT_EST_ENTREGA/data/dbCurriculo.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.static("frontend/")); // Colocar toda a parte estática no frontend

// Definição dos endpoints para CRUD de Formação

// Lista todas as formações (Read)
app.get('/listaFormacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM Formacao ORDER BY AnoInicio DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Insere uma nova formação (Create)
app.post('/insereFormacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = `INSERT INTO Formacao (PessoaID, Curso, Instituicao, AnoInicio, AnoFim, Descricao) VALUES (?, ?, ?, ?, ?, ?)`;
    var params = [req.body.PessoaID, req.body.Curso, req.body.Instituicao, req.body.AnoInicio, req.body.AnoFim, req.body.Descricao];
    db.run(sql, params, err => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "Formação inserida com sucesso",
            "data": req.body
        });
    });
    db.close();
});

// Buscar dados para atualização de uma formação (Update - Parte 1)
app.get('/atualizaFormacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = "SELECT * FROM Formacao WHERE ID = ?";
    var params = [req.query.ID];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
    db.close();
});

// Atualiza uma formação existente (Update - Parte 2)
app.post('/atualizaFormacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = `UPDATE Formacao SET Curso = ?, Instituicao = ?, AnoInicio = ?, AnoFim = ?, Descricao = ? WHERE ID = ?`;
    var params = [req.body.Curso, req.body.Instituicao, req.body.AnoInicio, req.body.AnoFim, req.body.Descricao, req.body.ID];
    db.run(sql, params, err => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "Formação atualizada com sucesso",
            "data": req.body
        });
    });
    db.close();
});

// Remove uma formação (Delete)
app.get('/removeFormacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = "DELETE FROM Formacao WHERE ID = ?";
    var params = [req.query.ID];
    db.run(sql, params, err => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({"message": "Formação removida com sucesso"});
    });
    db.close();
});

// Inicializando o servidor
app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
