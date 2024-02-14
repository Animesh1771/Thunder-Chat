import mongoose from "mongoose";

let isConnected=false

export const connectToDB =async()=>{
    mongoose.set('strictQuery',true)

    if(isConnected){
        console.log("mongoo is already connectd")
        return
    }
    try{
        await mongoose.connect(process.env.DB,{
            dbName:"ThunderChat",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        isConnected=true;
        console.log("MongoDb is connected successfully");
    }catch(error){
        console.log(error);
    }

};