import {mongoose} from "mongoose"

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://genesis:genesis@cluster0.msjhg.mongodb.net/ZEN');
        console.log('>>> DB esta conectada')
    } 
    catch(error){
        console.log(error)
    };
};