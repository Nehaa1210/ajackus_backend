const express = require("express")
const { UserModel } = require("../model/user.model");

const userRouter =  express.Router()



userRouter.post("/add", async(req,res)=>{
    try{
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send({"msg":"A new user has been added"})
    }
    catch(err){
       res.status(400).send({"error":err})
    }
})

 userRouter.get("/", async(req,res) => {
    try{
        const user=await UserModel.find()
          res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})

userRouter.patch("/update/:userID", async(req,res) => {
    const {userID} = req.params
    try{
        
            let data = await UserModel.findByIdAndUpdate({_id:userID},req.body) 
            res.status(200).send({"msg":`User with ID:${userID} has been updated`, data})
       
    }
    catch(err){
        console.log(err)
        res.status(400).send({"error":err})
    }
})
 
userRouter.delete("/delete/:userID", async(req,res) => {
    const {userID} = req.params
    try{
        
            await UserModel.findByIdAndDelete({_id:userID}) 
            res.status(200).send({"msg":`User with ID:${userID} has been deleted`})
       
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})


module.exports={
    userRouter
}