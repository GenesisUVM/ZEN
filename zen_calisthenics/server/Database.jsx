import {mongoose} from "mongoose"

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://genesis:<db_password>@cluster0.msjhg.mongodb.net/');
        console.log('>>> DB esta conectada')
    } 
    catch(error){
        console.log(error)
    };
};