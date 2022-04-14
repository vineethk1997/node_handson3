
// console.log("hello")

// const express = require("express");

// creating server
const express = require("express");

const server = express();

const middleware1 = (req, res, next)=>{
    console.log("This is middleware1");
    next()
}


server.use(middleware1)


server.get("/",(request,response)=>{
    response.send("<h1>Hello</h1>")
})

server.get("/user",(request,response)=>{
    response.send("Hello World")
})

server.get("/id",(request,response)=>{
    response.send("Hello Hello Hello")
})

server.post("/addUser",(req,res)=>{
    console.log(res.query);
    res.send("success");
})

server.put("/editUser/:id",(req,res)=>{
    console.log(req.query);
    res.send("success")
})

server.listen(3000,()=>{
    console.log("It is running")
})


// CRUD stands for create read update delete

// GET: It is a the default method of http.It is used to request data from the server.
//POST: It is used to send data to the server and adds the data as an new entry into the database.
//PUT: It is used to send data to server and update some data in the database using that data.
//DELETE: It is used to send data to server and using that data it deletes some data in the database.



// const express = require("express");
// const cors = require("cors");
// const app = express();


// app.use(cors());    //cors will be enabled.


// useEffect(()=>{
//     axios.get("http://0.0.0.0:5000/").then((res)=>{
//         console.log(res);
//     })

//     axios.post("http://0.0.0.0:5000/addUser",{name:"Saloni", age:16}).then((res)=>{
//         console.log(res);
//     })
// })
