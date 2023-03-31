"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var pg_1 = require("pg");
var DB = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    database: "API_Visiona",
    password: "thygas020",
    port: 5432
});
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/login", function (req, res) {
    var email = req.body.email;
    //const { senha } = req.body
    var SQL = ("SELECT * FROM Usuarios WHERE usuario_email = '" + email + "'");
    DB.query(SQL, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log({ msg: "Usuario logado", status: 'OK' });
        }
    });
});
//Cadastrar um usuario no banco
app.post("/registro", function (req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var confirmarSenha = req.body.confirmarSenha;
    //let SQL = "INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ($1,$2,$3,$4)"
    var SQL = ("INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ('" + nome + "','" + email + "', '" + senha + "', '" + confirmarSenha + "')");
    DB.query(SQL, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200);
        }
    });
});
app.get("/recupera-dados-usuario", function (req, res) {
    var SQL = "SELECT * FROM Usuarios";
    DB.query(SQL, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});
app.put("/editar", function (req, res) {
    var nome = req.body.nome;
    var username = req.body.username;
    var SQL = ("UPDATE Usuarios SET usuario_nome = '" + nome + "', nome_usuario = '" + username + "' WHERE usuario_ID = 'd4880598-eb1d-4fa5-aa26-3190f866d4b2'");
    DB.query(SQL, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log({ msg: "Editado com sucesso." });
        }
    });
});
app.listen(3001, function () {
    console.log("Servidor rodando!");
});
