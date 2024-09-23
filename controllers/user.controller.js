import { getAllUser,getUser,updateUser,deleteUser,forgetPassword } from "../services/user.service.js";


export const getAllUserController = async(req,res) => {
    try {
        const users = await getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getUserController = async(req,res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateUserController = async(req,res) => {
    try {
        const user = await updateUser(req.params.id,req.body)
        res.status(201).json({message : "User Got Updated",user})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteUserController = async(req,res)=> {
    try {
        const user = await deleteUser(req.params.id);
        res.status(204).json({message:"User got deleted",user})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const changePasswordController = async(req,res) => {
    try {
        const user = await forgetPassword(req.params.id,req.body);
        res.status(201).json({message:"password got updated",user})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}