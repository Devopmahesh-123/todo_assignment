import express from 'express';
import config from 'config';
import db from './database/databaseConfig';
import router from './router/router';

const app = express();
const {API_PORT} = config.get("PORTS");

// database connection.
db();

// router middleware.
const apiRouter = express.Router();
app.use('/api/v1', apiRouter);
apiRouter.use('/todo',router.todo_router);

app.listen(API_PORT,()=>{
    console.log(`Server is running at port number ${API_PORT}`);
})