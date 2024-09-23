import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const registerUser = async (name,email,password) => {
  
    const user = await User.findOne({where : { email }});
    
    if(user)
    {
        throw new Error("Email already in use");
    }
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password,salt);
    
    const newUser = await User.create({name,email,password:hashedPassword});
    return newUser
}

export const loginUser = async(email,password) => {
    const user = await User.findOne({where : {email}});
    if(!user){
        throw new Error("User not Found");
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        throw new Error("Invalid credentials")
    }
    const token = Jwt.sign({userId:user.id},process.env.JWT_SECRETKEY,{expiresIn : "10h"});
    return {token,user}

}