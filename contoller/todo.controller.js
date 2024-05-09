import Todo from "../model/todoModel";

export const addTodoController = async(req,res,next)=>{
   try {
     const data = await Assignment.find();  
     console.log("data>>>>",data);   
    return res.json({
        status:'success',
        code: 200,
        message: 'Data fetch successfully.',
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status:'failue',
        code: 500,
        message: 'Internal server error.',
        data:''
    })
   }
}

export const updateTodoController = async(req,res,next)=>{
   try {
     const data = await Assignment.find();  
     console.log("data>>>>",data);   
    return res.json({
        status:'success',
        code: 200,
        message: 'Data fetch successfully.',
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status:'failue',
        code: 500,
        message: 'Internal server error.',
        data:''
    })
   }
}

export const deleteTodoController = async(req,res,next)=>{
   try {
     const data = await Assignment.find();  
     console.log("data>>>>",data);   
    return res.json({
        status:'success',
        code: 200,
        message: 'Data fetch successfully.',
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status:'failue',
        code: 500,
        message: 'Internal server error.',
        data:''
    })
   }
}

export const getTodoController = async(req,res,next)=>{
   try {
     const data = await Assignment.find();  
     console.log("data>>>>",data);   
    return res.json({
        status:'success',
        code: 200,
        message: 'Data fetch successfully.',
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status:'failue',
        code: 500,
        message: 'Internal server error.',
        data:''
    })
   }
}