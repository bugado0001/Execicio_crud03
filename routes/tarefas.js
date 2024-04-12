/*Nota pro professor: acabei usando objetos, quando era para usar arrays
nomais, mas a ideia é mesma.*/ 

const express = require("express");
/*A variável router está sendo utilizada para criar um roteador no Express.
 Um roteador em Express é um objeto que permite agrupar rotas e seus 
 manipuladores relacionados, que podem 
ser então adicionados ao aplicativo principal ou a outro roteador. */
const router = express.Router()

//"Banco de dados"
let listaTarefa = [
{
id: 1, 
tarefa:"Comprar pão."

}
,
{
id:2,
tarefa:"levar as crianças para escola."

}
, 
{
id:3, 
tarefa: "fazer o trabalho da faculdade"


}
]; 



/*  READ -> Recuperar todas as tarefas.*/ 
router.get('/tarefas', (req, res)=>{
res.json(listaTarefa)

})

// READ  -> Recuperar uma tarefa específica por meio de seu identificador.
router.get('/tarefas/:id', (req, res)=>{
let id = req.params.id
/*banana de forma generica representa os objetos que tem dentro da array
nesse codigo a função pecorre por todos os objetos ate encotra o objeto id 
que condiz com o mesmo valor que tem o a variavel id. */
let tarefa = listaTarefa.find(banana => banana.id == id)
res.json(tarefa)

})

//POST -> Adicionar uma nova tarefa.

router.post('/tarefas', (req, res)=>{
let novaTarefa = req.body
let idNovo = listaTarefa.length

let objetoTarefa = {
    
    id: idNovo +1 ,
    tarefa: novaTarefa.tarefa

}

listaTarefa.push(objetoTarefa);

res.json("Nova tarefa foi adicionada.")

})


/*PUT -> Atualizar uma tarefa existente com base em seu identificador. */

router.put('/tarefas/:id', (req,res)=>{
let novaTarefa = req.body
let id = req.params.id 


let substituiObj = {
id: id,
tarefa: novaTarefa.tarefa


}

let objeTrocado = listaTarefa.findIndex(tarefa => tarefa.id == id)

listaTarefa[objeTrocado] = substituiObj

res.json("Tarefa foi atualizada.")

})

// DELETE - Remover uma tarefa da lista com base em seu identificador.
router.delete('/tarefas/:id', (req,res)=>{
let id = req.params.id 

let objDeletado = listaTarefa.findIndex(tarefa=> tarefa.id == id)

listaTarefa.splice(objDeletado,1)

res.json("Tarefa deletada")
})

/* A linha module.exports = router no final do arquivo faz com 
que o objeto router seja exportado do módulo atual. 
Isso significa que quando você importa este arquivo em outro arquivo JavaScript usando require,
 o que é retornado é o objeto router que foi definido neste arquivo.*/
module.exports = router