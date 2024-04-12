// imports
const express = require("express"); 
const app = express(); 
const tarefas = require('./routes/tarefas')
const porta = 3000

// middlewares
app.use(express.json())





// rotas
// aponto para minha aplicação que esse router existe
// rota normal
// app.use(tarefas)
// subrota
app.use(tarefas)

// Start da aplicação
app.listen(porta, ()=>{
console.log("Aplicação inciada em htpp://localhost:3000")

})






















