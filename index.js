import express from "express";
const app = express();

// console.dir(app);

let port = 8080;

app.get("/", (req, res) => {
    res.send('Hello')
})

app.get("/:username", (req,res)=>{
    console.log(req.params);
    res.send("path doesn't exist you dumbo")
})



app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})