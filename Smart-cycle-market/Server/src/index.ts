import "src/DB"
import express from "express"
import AuthRouter from "./Router/auth";

const app= express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", (req,res)=>{
    res.send("<h1>Hello I am Ohees Server</h1>")
})

app.post("/", (req,res)=>{
    const result = req.body
    res.send(result)
})

// Api Routs
app.use("/auth" ,AuthRouter)


app.listen(3000, ()=>console.log("the port is running on http://localhost:3000"))