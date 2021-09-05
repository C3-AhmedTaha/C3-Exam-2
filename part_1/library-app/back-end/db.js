const mongoose=require("mongoose");

mongoose.connect("mongobb://localhost:27017/project_v77").then(
    ()=>{
        console.log("DBconnected")
    },(errr)=>{
        console.log("wrong")
    }
    
)
module.exports=mongoose