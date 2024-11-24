import {mongoose} from "mongoose"

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost/zen');
        console.log('>>> DB esta conectada')
    } 
    catch(error){
        console.log(error)
    };
};