import {z} from "zod";

export const userUpdateSchema = z.object({
    name:z.string().min(1,"Minimum 1 character is required").max(100).optional(),
    email:z.string().email("Invalid email format").optional(),
    oldPassword:z.string().min(8,"Minimum 8 character required").max(100).optional(),
    newPassword:z.string().min(8,"Minimum 8 character required").max(100).optional(),
}).strict()