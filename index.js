const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://lavanyareddy:insta%40clone@cluster0.ppjerhe.mongodb.net/?retryWrites=true&w=majority" ,()=>{
    console.log("connected to db");
})

app.use("/",require("./route"));
app.listen(3001,function(){
    console.log("server is running on port 3001")
})