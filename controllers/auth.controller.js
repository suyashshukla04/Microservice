import { registerUser,loginUser } from "../services/auth.service.js";


export const register = async (req,res) => {
    try {
        console.log("Inside register Controller")
        const {name,email,password} = req.body
        const user = await registerUser(name,email,password);
        console.log("response",user)
        res.status(201).json({message : "User registered succefully",user})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const login = async(req,res) => {
    try {
        const {email,password} = req.body
        const {token,user} = await loginUser(email,password);
        res.status(201).json({message:"User got loggedIn",user,token})
    } catch (error) {
     res.status(500).json({message : error.message})   
    }
}