import {z} from "zod";

export const registerSchema = z.object({
    name:z.string().min(1,"name is required").max(100),
    email:z.string().email('Invalid email format'),
    password:z.string().min(8,'Password too short')
})

export const loginSchema = z.object({
    email : z.string().email('Invalid email'),
    password : z.string().min(8,'Password too short')
})