import { connectToDB } from "@mongodb"
import User from "@models/User"
import {hash} from "bcryptjs";

export const POST =async(req,res)=>{
    try{
        await connectToDB();
        const body=await req.json();

        const {username,email,password}=body;

        const existingUser=await User.findOne({email});

        if(existingUser){
            return new Response("user already exists",{
                status:400,
            });
        }
        const hashPassword=await hash(password,10);
        const newUser=await User.create({
            username,email,password:hashPassword,
        });
        await newUser.save();
        return new Response(JSON.stringify(newUser),{status:200});
    }catch(err){
        console.log(error);
        return new Response("Fail to create a new user",{
            status:500,
        });
    }
}