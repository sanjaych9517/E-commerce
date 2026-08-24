const express = require('express');
const app = express();
const mongoose = require('mongoose')

const MONGO_URL = "mongodb://127.0.0.1:27017/Ecommerce";
const PORT = 5001;

main().then(() =>{
  console.log("connected to DB");
}).catch(err =>{
   console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/",(req, res) =>{
    res.send("Hi I am a ROOT");
});

app.listen(PORT, () => {
  console.log(`server is listening on PORT http://localhost:${PORT}`)
})