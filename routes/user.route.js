import express from "express";
import User from "../models/user.model.js";

const router = express.Router();



router.get("/",async(req,res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(users);
        return ;
        
    } catch (error) {
        res.status(500).json({message: error.message})
        return ;
    }
})
 
router.get("/:id", async (req,res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({message : "User not Found"})
        }
        res.status(200).json(user);
        return 
    } catch (error) {
        res.status(500).json({message : error.message});
        return 
    }
})

router.put("/:id",async (req,res) => {
    try {
        
        const user =  await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({message : "User not Found"});
        }
        await user.update(req.body);
        res.status(201).json(user)
        return 
    } catch (error) {
        res.status(500).send({message : error.message})
    }
})

router.delete("/:id", async (req,res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({message : "User not Found"})
        }
        await user.destroy();
        return res.status(204).json({
            message : "User got deleted"
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
})

export default router;