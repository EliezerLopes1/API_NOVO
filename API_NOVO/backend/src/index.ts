import express from "express"
import cors from "cors"
import { Pool } from "pg"
import { log } from "console"

const DB = new Pool({
    user: "postgres",
    host: "localhost",
    database: "API_Visiona",
    password: "250304me",
    port: 5555
})

const app = express()
app.use(cors())
app.use(express.json())


app.post("/login", (req, res) => {
    const { email } = req.body
    //const { senha } = req.body

    let SQL = ("SELECT * FROM Usuarios WHERE usuario_email = '"+email+"'")

    DB.query(SQL, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/user')
            console.log({msg: "Usuario logado", status: 'OK'});
        }
    })
})
//Cadastrar um usuario no banco
app.post("/registro", (req, res) => {
    const { nome } = req.body
    const { email } = req.body
    const { senha } = req.body
    const { confirmarSenha } = req.body
    
    //let SQL = "INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ($1,$2,$3,$4)"
    let SQL = ("INSERT INTO Usuarios (usuario_nome, usuario_email, nome_usuario, usuario_senha) VALUES ('"+nome+"','"+email+"', '"+senha+"', '"+confirmarSenha+"')")
    
    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200)
        }
    })
})

app.get("/recupera-dados-usuario", (req,res) => {
    let SQL = "SELECT * FROM Usuarios"

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/recupera-acoes", (req, res) => {
    let SQL = "SELECT * FROM Acoes WHERE acao_ID = 1"

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log({msg: "Acoes recuperadas com sucesso."})
        }
    })
})

app.put("/editar", (req, res) => {
    const { nome } = req.body
    const { username } = req.body

    let SQL = ("UPDATE Usuarios SET usuario_nome = '"+nome+"', nome_usuario = '"+username+"' WHERE usuario_ID = 'd4880598-eb1d-4fa5-aa26-3190f866d4b2'")

    DB.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log({msg: "Editado com sucesso."})
        }
    })
})

app.get("/read", (_, res) => {

    let SQL = "SELECT usuario_nome, usuario_email, nome_usuario, usuario_tipo, to_char(usuario_data_criacao, 'DD/MM/YYYY') FROM usuarios WHERE usuario_ID = '5f86aeec-ee1e-4405-8c48-7129cdd72b41'";
  
    DB.query(SQL, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data.rows);
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando!")
})