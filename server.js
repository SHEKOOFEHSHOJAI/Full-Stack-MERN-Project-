const express=require("express");
const mongoose=require("mongoose");

require("dotenv").config();
const cors=require("cors");

const router=require("./routes/ToDoRoutes")
const app=express();
app.use(express.json())
app.use(cors());
app.use(router)

mongoose
.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Mongodb Connected..."))
.catch((err) => console.error(err));

app.listen(5000,()=>{

    console.log('app listening on port 5000');
})