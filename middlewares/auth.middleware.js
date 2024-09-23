import Jwt from "jsonwebtoken";


export const authToken = async(req,res,next) => {
    try {
       
        const token = req.headers["authorization"];
        if(!token){
            return res.status(404).json({message:"Please Provide Token"})
        }
    Jwt.verify(token,process.env.JWT_SECRETKEY,(err,decode)=>{
        if(err){
            return res.status(403).json({message : "Invalid Token"});
        }
        req.userId = decode.userId
    });

     next();

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const registerMid = (schema) => (req,res,next) => {
    try {
        schema.parse(req.body);
        next()
    } catch (error) {
        res.status(400).json({message : error.errors})
    }
}

export const loginMid = (schema) => (req,res,next) =>  {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(400).json({message:error.errors})
    }
}