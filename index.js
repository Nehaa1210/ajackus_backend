const express = require("express");
const { connection } = require("./db");



const {userRouter} = require("./routes/user.routes")


const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.send({"msg": "Welcome to Ajackus"})
})



app.listen(8000, async() => {
    try{
        await connection;
        console.log("database connected")
    }
    catch(error){
        console.log(error)
    }
    console.log("Server running")
})
