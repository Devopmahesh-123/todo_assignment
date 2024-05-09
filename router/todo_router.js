import express from 'express';
import { addTodoController, 
         updateTodoController,
         deleteTodoController,
         getTodoController } from '../contoller/todo.controller';
         
const todoRouter = express.Router();

// Router to add todo data.
todoRouter.post('/postTodo',addTodoController);

// Router to update the todo data.
todoRouter.put('/updatetodo/:id',updateTodoController);

// Router to delete the todo data.
todoRouter.delete('/deletetodo/:id',deleteTodoController);

// Router to get the todo data.
todoRouter.get('/gettodo',getTodoController);

export default todoRouter;