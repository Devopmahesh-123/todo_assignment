import Todo from "../model/todoModel";
import constant from "../constant";
import mongoose from "mongoose";

export const addTodoController = async(req,res,next)=>{
   try {
    const body = req.body;
    const request_data = {
        ...body,
        _id:new mongoose.Types.ObjectId()
    }
    const data = await Todo(request_data).save();    
    return res.json({
        status:constant.msgType.successStatus,
        code:constant.msgCode.successCode,
        message:constant.msg.createtodo,
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status:constant.msgType.failedStatus,
        code:constant.msgCode.internalServerError,
        message:constant.msg.internalServerError,
        data:''
    })
   }
}

export const updateTodoController = async(req,res,next)=>{
    console.log("id>>>",req.query,">>>",req.body);
   try {
    const _id = new mongoose.Types.ObjectId(req.query.id);
     const data = await Todo.findByIdAndUpdate(_id,req.body,{new:true});  
    return res.json({
        status: constant.msgType.successStatus,
        code: constant.msgCode.successCode,
        message: constant.msg.dataupdate,
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status: constant.msgType.failedStatus,
        code: constant.msgCode.internalServerError,
        message: constant.msg.internalServerError,
        data:''
    })
   }
}

export const deleteTodoController = async(req,res,next)=>{
   try {
     await Todo.findByIdAndDelete({_id:req.query.id});  
    return res.json({
        status: constant.msgType.successStatus,
        code: constant.msgCode.successCode,
        message:constant.msg.datadelete,
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status: constant.msgType.failedStatus,
        code: constant.msgCode.internalServerError,
        message: constant.msg.internalServerError,
        data:''
    })
   }
}

export const getTodoController = async(req,res,next)=>{
    console.log("<<<<req>>>",req.query)
   try {
    let { filter, limit, page, sort } = req.query;

    // Default values if not provided
    limit = parseInt(limit) || 10; // Default limit to 10 if not provided
    page = parseInt(page) || 1; // Default page to 1 if not provided
    sort = sort || 'createdAt'; // Default sorting by createdAt in descending order if not provided

    let filterCondition = {}; // Define an empty filter object
    if (filter && filter !== 'undefined') {
        // If filter is provided and not 'undefined'
        if (filter === 'Upcoming') {
            // If filter is 'Upcoming', set status to false
            filterCondition = { status: false };
        } else {
            // If filter is other than 'Upcoming', set status to true
            filterCondition = { status: true };
        }
    }
    console.log("filter>>>", filterCondition);
    const skip = (page - 1) * limit; // Calculate skip value for pagination

    const data = await Todo.find(filterCondition)
        .sort(sort) // Apply sorting
        .skip(skip) // Apply pagination
        .limit(limit); // Limit the number of documents returned
    return res.json({
        status:constant.msgType.successStatus,
        code:constant.msgCode.successCode,
        message: constant.msg.datafetch,
        data: data
    })
   } catch (error) {
    console.log("error",error);
    return res.json({
        status:constant.msgType.failedStatus,
        code: constant.msgCode.internalServerError,
        message: constant.msg.internalServerError,
        data:''
    })
   }
}