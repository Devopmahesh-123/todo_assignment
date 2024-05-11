import express from 'express';
import { addTodoController, 
         updateTodoController,
         deleteTodoController,
         getTodoController } from '../contoller/todo.controller';
import todoValidation from '../validation';
         
const todoRouter = express.Router();

// Router to add todo data.
todoRouter.post('/addTodo',todoValidation,addTodoController);

// Router to update the todo data.
todoRouter.put('/updatetodo',todoValidation,updateTodoController);

// Router to delete the todo data.
todoRouter.delete('/deletetodo',deleteTodoController);

// Router to get the todo data.
todoRouter.get('/gettodo',getTodoController);

export default todoRouter;