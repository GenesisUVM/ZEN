import {connect} from "mongoose"


(async ()=>{
    try{
        const db = await connect("mongodb://localhost:27017/zen");
        console.log("Database connected to" , db.connection.name);
    } catch (error){
        console.log(error);
    }
})();