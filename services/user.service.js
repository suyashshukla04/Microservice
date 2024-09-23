import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const getAllUser = async()=>{
        const users = await User.findAll();
        return users ;
}

export const getUser = async (id)=> {
    
        const user = await User.findByPk(id);
        if(!user){
            throw new Error("User Not Found")
        }
        return user
    
}

export const updateUser = async (id,update) => {
       const user =  await User.findByPk(id);
       if(update.password){
          throw new Error("Password can't be updated")
       }
        if(!user){
            throw new Error("user not found")
            
        }

        return  await user.update(update);
    
}

export const deleteUser = async (id) => {
        const user = await User.findByPk(id);

        if(!user){
            throw new Error("user not found")
        }

      return await user.destroy();
        
       
}

export const forgetPassword = async(id,update) =>
{
    const user = await getUser(id);
    if(!(bcrypt.compareSync(update.oldPassword,user.password))){
       throw new Error("Incorrect OldPassword")
    }
    const hashedPassword = bcrypt.hashSync(update.newPassword,10);
    await user.update({password:hashedPassword})
    return user
}