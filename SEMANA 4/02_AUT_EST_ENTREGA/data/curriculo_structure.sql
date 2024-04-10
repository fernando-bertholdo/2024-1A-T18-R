
-- Criação das tabelas para o currículo
-- Tabela Pessoa
CREATE TABLE Pessoa (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Nome TEXT NOT NULL,
    Foto BLOB,
    Email TEXT NOT NULL,
    Telefone TEXT NOT NULL,
    Endereco TEXT NOT NULL,
    SobreMim TEXT
);

-- Tabela Formacao
CREATE TABLE Formacao (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PessoaID INTEGER NOT NULL,
    Curso TEXT NOT NULL,
    Instituicao TEXT NOT NULL,
    AnoInicio INTEGER,
    AnoFim INTEGER,
    Descricao TEXT,
    FOREIGN KEY (PessoaID) REFERENCES Pessoa (ID)
);

-- Tabela Experiencia
CREATE TABLE Experiencia (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PessoaID INTEGER NOT NULL,
    Empresa TEXT NOT NULL,
    Cargo TEXT NOT NULL,
    AnoInicio INTEGER,
    AnoFim INTEGER,
    Descricao TEXT,
    FOREIGN KEY (PessoaID) REFERENCES Pessoa (ID)
);

-- Tabela Realizacoes
CREATE TABLE Realizacoes (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PessoaID INTEGER NOT NULL,
    Titulo TEXT NOT NULL,
    Ano INTEGER,
    Descricao TEXT,
    FOREIGN KEY (PessoaID) REFERENCES Pessoa (ID)
);

-- Tabela Habilidade
CREATE TABLE Habilidade (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PessoaID INTEGER NOT NULL,
    Habilidade TEXT NOT NULL,
    NivelProficiencia INTEGER NOT NULL,
    FOREIGN KEY (PessoaID) REFERENCES Pessoa (ID)
);

-- Tabela Personalidade
CREATE TABLE Personalidade (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    PessoaID INTEGER NOT NULL,
    Atributo TEXT NOT NULL,
    Nivel INTEGER NOT NULL,
    FOREIGN KEY (PessoaID) REFERENCES Pessoa (ID)
);