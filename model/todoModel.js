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
    status:{
        type:Boolean,
        default: false
    }
},
{timestamps: { currentTime: () => Date.now() }}
)

const Todo = mongoose.model("todo",todoSchema,"todo");
export default Todo;