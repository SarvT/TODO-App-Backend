import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

let todos = [];
let id = 0;

router.get('/todos', (req, res) => {
    console.log(`todos in the database: ${todos}`);

    res.send(todos);
});

router.post('/todo', (req, res) => {   
    const todo = req.body;
    todo.status = "pending";
    todo.id = ++id;
    todos.push({...todo});
    res.send(`todo [${todo.id}] added to the database.`);
});

router.get('/todo/:id', (req, res) => {
    const {id} = req.params;
    const todo = todos.find((todo) => todo.id == id);
    res.send(todo)
});

router.delete('/todo/:id/delete', (req, res) => { 
    res.send(`todo with id ${req.params.id} has been deleted`);
    
    todos = todos.filter((todo) => todo.id != req.params.id);
});

router.post('/todo/:id/done', (req,res) => {
    let todo = todos.find((todo) => todo.id == req.params.id);
    todo.status = "done";

    res.send(`status has been updated to done for todo with id ${req.params.id}`)
});

export default router;