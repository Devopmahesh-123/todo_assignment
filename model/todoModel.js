import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    dateTime:{
        type:Date,
        required:true
    },
    done:{
        type:Boolean,
        default: false
    }
})

const Todo = mongoose.model("todo",todoSchema,"todo");
export default Todo;